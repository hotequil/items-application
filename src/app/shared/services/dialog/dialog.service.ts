import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';

import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private readonly DEFAULT_CONFIGURATIONS: MatDialogConfig = {
        autoFocus: true,
        maxWidth: '1200px',
        width: '100%',
        role: "dialog",
        minWidth: '280px'
    }

    private reference!: MatDialogRef<any>|null;
    private dialogConfigurations!: MatDialogConfig<any>;

    constructor(private matDialog: MatDialog){}

    open(
        template: ComponentType<any>|TemplateRef<any>,
        configurations?: MatDialogConfig<any>
    ){
        this.close();

        this.dialogConfigurations = Object.assign({}, this.DEFAULT_CONFIGURATIONS, configurations);
        this.reference = this.matDialog.open(template, this.dialogConfigurations);

        this.reference.beforeClosed().pipe(take(1)).subscribe(() => this.close());
    }

    close(): void{
        this.dialogConfigurations = {};
        this.reference?.close();
        this.reference = null;
    }

    get configurations(): MatDialogConfig<any>{
        return Object.assign({}, this.dialogConfigurations);
    }
}
