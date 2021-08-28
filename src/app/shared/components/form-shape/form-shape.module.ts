import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { FormShapeComponent } from './form-shape.component';

@NgModule({
    declarations: [
        FormShapeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    exports: [
        FormShapeComponent
    ]
})
export class FormShapeModule{}
