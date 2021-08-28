import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-shape',
  templateUrl: './form-shape.component.html',
  styleUrls: ['./form-shape.component.scss']
})
export class FormShapeComponent{
    @Output() submitForm = new EventEmitter<void>();
    @Input() form!: FormGroup;
    @Input() title = 'Título do formulário';
    @Input() dialogMode = false;
}
