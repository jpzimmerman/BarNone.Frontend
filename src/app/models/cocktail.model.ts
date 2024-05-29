import { Product } from "./product.model";

export class Cocktail implements Product {
    name :string;
    description: string;
    price: number;
    category: string;

    public constructor(name: string, description: string, price: number, category: string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}
