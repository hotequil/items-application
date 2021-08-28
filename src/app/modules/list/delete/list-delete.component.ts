import { Component, OnInit } from '@angular/core';

import { Item } from '../../../shared/models/item';
import { DialogService } from '../../../shared/services/dialog/dialog.service';
import { ItemsService } from '../../../shared/services/items/items.service';

@Component({
    selector: 'app-list-delete',
    templateUrl: './list-delete.component.html',
    styleUrls: ['./list-delete.component.scss']
})
export class ListDeleteComponent implements OnInit{
    item!: Item;

    constructor(
        public dialogService: DialogService,
        private itemsService: ItemsService
    ){}

    ngOnInit(): void{
        this.item = this.dialogService.configurations.data.item;
    }

    onSubmit(): void{
        this.itemsService.delete(this.item.id as number);
        this.dialogService.close();
    }
}

