export interface Item {
    name: string;
    unit: string;
    quantity: number;
    price: string;
    perishableProduct: boolean;
    expirationDate: string;
    manufacturingDate: string;
    id?: number
}
