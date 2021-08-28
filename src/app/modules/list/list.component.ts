import { Component, OnDestroy, OnInit } from '@angular/core';

import { finalize, take, takeWhile } from 'rxjs/operators';

import { Item } from '../../shared/models/item';
import { ItemsService } from '../../shared/services/items/items.service';
import { DialogService } from '../../shared/services/dialog/dialog.service';
import { ListDeleteComponent } from './delete/list-delete.component';
import { SaveComponent } from '../save/save.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy{
    data: Item[] = [];
    itemColumns = ['name', 'unit', 'quantity', 'price', 'perishableProduct', 'expirationDate', 'manufacturingDate', 'actions'];
    loading = false;
    stillAlive = true;

    constructor(
        private itemsService: ItemsService,
        private dialogService: DialogService
    ){}

    ngOnInit(): void{
        this.get();
        this.watchToReloadList();
    }

    openEditDialog(item: Item): void{
        this.dialogService.open(
            SaveComponent,
            {
                data: { item }
            }
        );
    }

    openDeleteDialog(item: Item): void{
        this.dialogService.open(
            ListDeleteComponent,
            {
                role: "alertdialog",
                maxWidth: "600px",
                data: {
                    item
                }
            }
        );
    }

    ngOnDestroy(): void{
        this.stillAlive = false;
    }

    private get(): void{
        this.loading = true;

        this.itemsService
            .get()
            .pipe(
                take(1),
                finalize(() => this.loading = false)
            )
            .subscribe(items => this.data = items);
    }

    private watchToReloadList(): void{
        this.itemsService
            .reload
            .asObservable()
            .pipe(takeWhile(() => this.stillAlive))
            .subscribe(() => this.get());
    }
}
