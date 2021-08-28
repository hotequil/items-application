import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { NotFoundModule } from '../../shared/components/not-found/not-found.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { IconButtonModule } from '../../shared/components/icon-button/icon-button.module';
import { ListDeleteComponent } from './delete/list-delete.component';
import { FormShapeModule } from '../../shared/components/form-shape/form-shape.module';
import { BasicButtonModule } from '../../shared/components/basic-button/basic-button.module';

@NgModule({
    declarations: [
        ListComponent,
        ListDeleteComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        MatTableModule,
        NotFoundModule,
        MatButtonModule,
        LoadingModule,
        ButtonModule,
        IconButtonModule,
        FormShapeModule,
        BasicButtonModule
    ]
})
export class ListModule {}
