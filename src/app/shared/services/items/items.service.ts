import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Item } from '../../models/item';
import { SnackBarService } from '../snack-bar/snack-bar.service';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    reload = new Subject();

    private readonly KEY = 'items';

    constructor(private snackBar: SnackBarService){}

    get(): Observable<Item[]>{
        return of(this.itemsFromStorage()).pipe(delay(500));
    }

    delete(id: number): void{
        const list = this.itemsFromStorage()
                         .filter(item => id !== item.id);

        this.setItemsFromStorage(list);

        this.snackBar.open('Item excluído com sucesso');
        this.reload.next();
    }

    update(id: number, item: Item): void{
        const list = this.itemsFromStorage();
        const updatedItem = { ...item, id };
        const indexItemAtList = list.findIndex(item => item.id === id);

        list.splice(indexItemAtList, 1, updatedItem);

        this.setItemsFromStorage(list);

        this.snackBar.open('Item salvo com sucesso');
        this.reload.next();
    }

    create(item: Item): void{
        const list = this.itemsFromStorage();
        const lastItem = list[list.length - 1];

        item.id = lastItem?.id ? lastItem.id + 1 : 1;

        list.push(item);

        this.setItemsFromStorage(list);

        this.snackBar.open('Item cadastrado com sucesso');
    }

    private itemsFromStorage(): Item[]{
        return JSON.parse(localStorage.getItem(this.KEY) || '[]');
    }

    private setItemsFromStorage(items: Item[]): void{
        localStorage.setItem(this.KEY, JSON.stringify(items));
    }
}
