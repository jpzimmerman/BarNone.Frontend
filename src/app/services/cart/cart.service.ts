import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[] = []
  constructor() {

   }

   addItemToCart = (product: Product) => this.items.push(product);

   removeItemFromCart(item: Product) {

   }
}
