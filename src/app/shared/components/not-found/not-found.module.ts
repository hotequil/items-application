import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    exports: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
export class NotFoundModule { }
