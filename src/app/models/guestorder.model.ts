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
        this.name = ""
        this.specialInstructions = ""
        this.loyaltyProgramId = ""
        this.items = []
        this.total = 0.00
    }
}
