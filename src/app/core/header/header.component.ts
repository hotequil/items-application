import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter, map, takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
    @Input() drawer!: MatDrawer;

    toolbarTitle = '';

    private stillAlive = true;

    constructor(private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void{
        this.router.events
            .pipe(
                takeWhile(() => this.stillAlive),
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    let route = this.route;

                    while(route?.firstChild) route = route.firstChild;

                    return route;
                })
            )
            .subscribe(route => {
                const toolbar = route?.snapshot?.data?.toolbar;

                if(toolbar) this.toolbarTitle = `Items Application - ${toolbar}`;
            });
    }

    ngOnDestroy(): void{
        this.stillAlive = false;
    }
}
