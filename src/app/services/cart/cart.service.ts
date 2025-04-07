import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  subtotal: number = 0.0;
  constructor(public cookieService: CookieService) {}

  addItemToCart = (product: Product) => {
    const previousItems = this.items.find((s) => s.name == product.name);
    if (previousItems !== undefined) {
      previousItems.quantity += product.quantity;
    } else {
      this.items = [...this.items, product];
    }
    this.refreshCart();
  };

  removeItemFromCart(item: Product) {
    const key = this.items.indexOf(item);
    this.items.splice(key, 1);
    this.refreshCart();
  }

  refreshCart() {
    this.cookieService.set('shopping-cart', JSON.stringify(this.items), {
      expires: 0.003,
      sameSite: 'Strict',
    });
    this.subtotal = this.calculateSubtotal();
  }

  calculateSubtotal() {
    if (!this.items.length) {
      return 0.0;
    }

    return this.items
      .map((x) => x.price * x.quantity)
      .reduce((sum, item) => {
        const priceValue = item;
        if (Number.isInteger(priceValue)) {
          return sum + priceValue;
        }
        return sum;
      });
  }

  getSubtotal = () => this.subtotal;

  emptyCart = () => this.cookieService.delete('shopping-cart');
}
