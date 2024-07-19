import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[] = []
  constructor() {

   }

   addItemToCart = (product: Product) => {
    let previousItems = this.items.find(s => s.name == product.name)
    if (previousItems !== undefined) {
      alert(`previous item count: ${previousItems.quantity}, incoming items count: ${product.quantity}`)
      previousItems.quantity += product.quantity;
    }
    else {
      this.items.push(product);
    }
   }


   removeItemFromCart(item: Product) {

   }
}
