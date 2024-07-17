import { Product } from "./product.model";

export class Cocktail implements Product {
    id: number;
    name :string;
    description: string;
    price: number;
    category: string;
    quantity: number;

    public constructor(id: number, name: string, description: string, price: number, category: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.quantity = 0;
    }
}
