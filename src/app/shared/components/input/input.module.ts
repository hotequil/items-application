import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { InputComponent } from './input.component';
import { AutofocusModule } from "../../directives/autofocus/autofocus.module";

@NgModule({
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        CurrencyMaskModule,
        NgxMaskModule,
        AutofocusModule
    ]
})
export class InputModule { }
