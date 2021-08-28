import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { takeWhile } from 'rxjs/operators';

import { QuantityTypesService } from '../../shared/services/quantity-types/quantity-types.service';
import { FormValidatorService } from '../../shared/services/form-validator/form-validator.service';
import { ItemsService } from '../../shared/services/items/items.service';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { ItemQuantityTypes } from '../../shared/enums/item-quantity-types.enum';

@Component({
    selector: 'app-save',
    templateUrl: './save.component.html',
    styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit, OnDestroy{
    readonly MAX_LENGTH_NAME = 50;
    readonly DEFAULT_MANUFACTURING_DATE_VALIDATORS = [Validators.required];

    id!: number;
    editMode = false;
    quantityTypes = this.quantityTypesService.get();
    formValidator = FormValidatorService;
    maskQuantity = '';

    form: FormGroup = this.formBuilder.group({
        name: [null, [Validators.required, Validators.maxLength(this.MAX_LENGTH_NAME)]],
        unit: [null, Validators.required],
        quantity: [{ value: null, disabled: true }],
        price: [null, Validators.required],
        perishableProduct: [null],
        expirationDate: [null, FormValidatorService.shouldBeBiggerOrEqualToday],
        manufacturingDate: [null, this.DEFAULT_MANUFACTURING_DATE_VALIDATORS]
    });

    private stillAlive = true;

    constructor(
        private formBuilder: FormBuilder,
        private quantityTypesService: QuantityTypesService,
        private itemsService: ItemsService,
        private router: Router,
        public dialogService: DialogService
    ){}

    ngOnInit(): void{
        this.watchPerishableProductChanges();
        this.watchUnitChanges();
        this.isEditMode();
    }

    onSubmit(): void{
        if(this.editMode){
            this.itemsService.update(this.id, this.form.value);
            this.dialogService.close();
        } else{
            this.itemsService.create(this.form.value);
            this.router.navigateByUrl('/lista');
        }
    }

    get unit(): FormControl{
        return this.form.get('unit') as FormControl;
    }

    ngOnDestroy(): void{
        this.stillAlive = false;
    }

    private get expirationDate(): FormControl{
        return this.form.get('expirationDate') as FormControl;
    }

    private watchUnitChanges(): void{
        this.unit
            .valueChanges
            .pipe(takeWhile(() => this.stillAlive))
            .subscribe(value => this.configureQuantity(value))
    }

    private configureQuantity(value: string): void{
        const quantity = this.form.get('quantity') as FormControl;

        switch(value){
            case ItemQuantityTypes.UNIT:
                this.maskQuantity = '0*';
                break;
            default:
                this.maskQuantity = '0*.000';
        }

        value ? quantity.enable() : quantity.disable();
        quantity.setValue(null);
    }

    private watchPerishableProductChanges(): void{
        this.form
            .get('perishableProduct')
            ?.valueChanges
            .pipe(takeWhile(() => this.stillAlive))
            .subscribe(value => {
                this.validityExpirationDate(value);
                this.validityManufacturingDate(value);
            })
    }

    private validityExpirationDate(perishableProductValue: boolean): void{
        const field = this.expirationDate;
        const validators = [FormValidatorService.shouldBeBiggerOrEqualToday]

        if(perishableProductValue) validators.unshift(Validators.required);

        field.setValidators(validators);
        field.updateValueAndValidity();
    }

    private validityManufacturingDate(perishableProductValue: boolean): void{
        const field = this.form.get('manufacturingDate') as FormControl;
        const validators = [...this.DEFAULT_MANUFACTURING_DATE_VALIDATORS];

        if(perishableProductValue)
            validators.push(FormValidatorService.shouldNotBeBiggerThanExpirationDate(this.expirationDate));

        field.setValidators(validators);
        field.updateValueAndValidity();
    }

    private isEditMode(): void{
        const item = this.dialogService.configurations?.data?.item;

        if(!item) return;

        this.editMode = true;
        this.id = item.id;
        this.form.patchValue(item);
    }
}
