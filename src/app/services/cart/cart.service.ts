import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[] = []
  constructor(public cookieService: CookieService) {

   }

   addItemToCart = (product: Product) => {
    const previousItems = this.items.find(s => s.name == product.name)
    if (previousItems !== undefined) {
      alert(`previous item count: ${previousItems.quantity}, incoming items count: ${product.quantity}`)
      previousItems.quantity += product.quantity;
    }
    else {
      this.items.push(product);
    }
    this.refreshCart()
   }

   removeItemFromCart(item: Product) {
    const key = this.items.indexOf(item)
    this.items.splice(key, 1)
    this.refreshCart()
   }

   refreshCart = () => this.cookieService.set('shopping-cart', JSON.stringify(this.items), {expires: 0.003, sameSite: 'Strict'})
}
