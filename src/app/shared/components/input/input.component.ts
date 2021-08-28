import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormValidatorService } from '../../services/form-validator/form-validator.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() name = '';
    @Input() type = 'text';
    @Input() label = '';
    @Input() hint = '';
    @Input() placeholder = '';
    @Input() suffix = '';
    @Input() mask = '';
    @Input() currencyMode = false;
    @Input() maxlength: number|null = null;
    @Input() required = false;
    @Input() autofocus = false;

    field!: FormControl;
    formValidator = FormValidatorService;
    currencyOptions = { prefix: 'R$ ', thousands: '.', decimal: ',' };

    ngOnInit(): void {
        this.field = this.form.get(this.name) as FormControl;

        if(!this.field) throw new Error('Put a valid name and form for create a field');
    }
}
