export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  specialInstructions: string;
  tags: Array<string>;
}
