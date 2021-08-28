import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

import { MenuItem } from '../../shared/models/menu-item';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
    @Input() drawer!: MatDrawer;

    readonly MENU: MenuItem[] = [
        {
            name: "Lista",
            path: "lista"
        },
        {
            name: "Criação",
            path: "criacao"
        }
    ];

    constructor(private router: Router){}

    isSelected(path: string): boolean{
        return this.router.url.includes(path);
    }

    close(): void{
        if(this.drawer.mode === 'over') this.drawer.close();
    }
}
