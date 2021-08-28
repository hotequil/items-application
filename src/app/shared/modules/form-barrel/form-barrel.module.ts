import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormShapeModule } from '../../components/form-shape/form-shape.module';
import { InputModule } from '../../components/input/input.module';
import { SelectModule } from '../../components/select/select.module';
import { CheckboxModule } from '../../components/checkbox/checkbox.module';
import { DatepickerModule } from '../../components/datepicker/datepicker.module';
import { ButtonModule } from '../../components/button/button.module';

@NgModule({
    declarations: [],
    exports: [
        ReactiveFormsModule,
        FormShapeModule,
        InputModule,
        SelectModule,
        CheckboxModule,
        DatepickerModule,
        ButtonModule
    ]
})
export class FormBarrelModule{}
