import { Injectable } from '@angular/core';

import { QuantityType } from '../../models/quantity-type';
import { ItemQuantityTypes } from '../../enums/item-quantity-types.enum';

@Injectable({
    providedIn: 'root'
})
export class QuantityTypesService{
    get(): QuantityType[]{
        return [
            { name: 'Litro', type: ItemQuantityTypes.LITER },
            { name: 'Quilograma', type: ItemQuantityTypes.KILO },
            { name: 'Unidade', type: ItemQuantityTypes.UNIT },
        ]
    }
}
