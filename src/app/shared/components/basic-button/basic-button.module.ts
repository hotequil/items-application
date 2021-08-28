import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { BasicButtonComponent } from './basic-button.component';

@NgModule({
    declarations: [BasicButtonComponent],
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [BasicButtonComponent]
})
export class BasicButtonModule{}
