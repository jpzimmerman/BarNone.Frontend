import { Product } from "./product.model";

export class GuestOrder {
    public orderId: number;
    public name: string;
    public specialInstructions: string;
    public loyaltyProgramId: string;
    public items: Product[];
    public total: number;

    constructor() {
        this.orderId = 0
        this.name = "Jimbo"
        this.specialInstructions = "extra booze"
        this.loyaltyProgramId = "12345"
        this.items = []
        this.total = 0.00
    }
}
