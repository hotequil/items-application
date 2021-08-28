import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    @Input() label = '';
    @Input() form!: FormGroup;
    @Input() name = '';

    field!: FormControl;

    ngOnInit(): void {
        this.field = this.form.get(this.name) as FormControl;

        if(!this.field) throw new Error("Checkbox has not a field");
    }
}
