import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { DatepickerComponent } from './datepicker.component';

@NgModule({
    declarations: [
        DatepickerComponent
    ],
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatNativeDateModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    ],
    exports: [
        DatepickerComponent
    ]
})
export class DatepickerModule{}
