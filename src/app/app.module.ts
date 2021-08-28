import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { MenuModule } from './core/menu/menu.module';
import { FooterModule } from './core/footer/footer.module';
import { FormBarrelModule } from './shared/modules/form-barrel/form-barrel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        MenuModule,
        MatSidenavModule,
        MatDialogModule,
        FooterModule,
        FormBarrelModule,
        NgxMaskModule.forRoot()
    ],
    providers: [
        MatSnackBar,
        MatDialog
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}
