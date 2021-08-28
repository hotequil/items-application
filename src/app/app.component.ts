import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

import { fromEvent } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy{
    @ViewChild('drawer') drawer!: MatDrawer;

    mode!: MatDrawerMode;

    private stillAlive = true;

    constructor(private changeDetector: ChangeDetectorRef){}


    ngAfterViewInit(): void{
        this.watchResizeForChangeMenu();
    }

    ngOnDestroy(): void{
        this.stillAlive = false;
    }

    private watchResizeForChangeMenu(): void{
        fromEvent(window, 'resize')
            .pipe(
                takeWhile(() => this.stillAlive),
                map(() => window.innerWidth),
                startWith(window.innerWidth)
            )
            .subscribe((width: number) => {
                if(width >= 800){
                    this.mode = 'side';
                    this.drawer.open();
                } else {
                    this.mode = 'over';
                    this.drawer.close();
                }

                this.changeDetector.detectChanges();
            })
    }
}
