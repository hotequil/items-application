import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormValidatorService } from '../../services/form-validator/form-validator.service';
import { GenericObject } from '../../models/generic-object';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    @Input() label = '';
    @Input() options: GenericObject[] = [];
    @Input() valueProperty = 'id';
    @Input() nameProperty = 'name';
    @Input() name = '';
    @Input() required = false;
    @Input() form!: FormGroup;

    field!: FormControl;
    formValidator = FormValidatorService;

    ngOnInit(){
        this.field = this.form.get(this.name) as FormControl;

        if(!this.field)
            throw new Error('Put a valid name and form for create a field');
    }
}
