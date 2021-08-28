import { ItemQuantityTypes } from '../enums/item-quantity-types.enum';

export interface QuantityType {
    name: string,
    type: ItemQuantityTypes;
}
