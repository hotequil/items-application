import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { SaveComponent } from './save.component';
import { FormShapeModule } from '../../shared/components/form-shape/form-shape.module';
import { SaveRoutingModule } from './save-routing.module';
import { InputModule } from '../../shared/components/input/input.module';
import { SelectModule } from '../../shared/components/select/select.module';
import { CheckboxModule } from '../../shared/components/checkbox/checkbox.module';
import { DatepickerModule } from '../../shared/components/datepicker/datepicker.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { BasicButtonModule } from '../../shared/components/basic-button/basic-button.module';

@NgModule({
    declarations: [
        SaveComponent
    ],
    imports: [
        CommonModule,
        SaveRoutingModule,
        ReactiveFormsModule,
        FormShapeModule,
        MatButtonModule,
        InputModule,
        SelectModule,
        CheckboxModule,
        DatepickerModule,
        ButtonModule,
        BasicButtonModule
    ]
})
export class SaveModule{}
