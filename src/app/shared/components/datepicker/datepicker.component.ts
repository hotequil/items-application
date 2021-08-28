import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker/datepicker-input-base';

import { startWith, takeWhile } from 'rxjs/operators';

import { FormValidatorService } from '../../services/form-validator/form-validator.service';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, OnDestroy{
    @Input() required = false;
    @Input() label = '';
    @Input() name = '';
    @Input() hint = '';
    @Input() filter!: DateFilterFn<any>;
    @Input() form!: FormGroup;

    formValidator = FormValidatorService;
    field!: FormControl;

    private stillAlive = true;

    constructor(){}

    ngOnInit(): void{
        this.field = this.form.get(this.name) as FormControl;

        if(!this.field) throw new Error('You should set name and form correctly');

        this.watchFieldChanges();
    }

    ngOnDestroy(): void{
        this.stillAlive = false;
    }

    private watchFieldChanges(): void{
        this.field
            .valueChanges
            .pipe(
                startWith(null),
                takeWhile(() => this.stillAlive)
            )
            .subscribe(() => this.required = this.isRequired())
    }

    private isRequired(): boolean{
        const validator = this.field.validator && this.field.validator({} as FormControl);

        return this.field.validator?.name === "required" ||
               this.field.errors?.required ||
               validator?.required ||
               false;
    }
}
