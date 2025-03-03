import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { DataService } from '../services/data/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  nameForOrder: string = '';
  products: Cocktail[] = [];
  subtotal: number = 0.0;

  cartClosed = new EventEmitter();

  constructor(
    public dataService: DataService,
    public cartService: CartService,
    public dialogRef: MatDialogRef<ShoppingCartComponent>
  ) {
    this.products = cartService.items;
  }

  removeItem = (item: Product) => this.cartService.removeItemFromCart(item);

  onCustomerOrder() {
    const tmpOrder = {
      name: this.nameForOrder,
      items: this.cartService.items,
      orderId: 0,
      specialInstructions: '',
      total: 0.0,
      loyaltyProgramId: '',
    };
    this.dataService.addGuestOrder(tmpOrder);
    this.cartClosed.emit();
    this.cartService.items = [];
    this.cartService.emptyCart();
  }

  getSubtotal() {
    if (!this.cartService.items.length) {
      return 0.0;
    }

    return this.cartService.items
      .map((x) => x.price * x.quantity)
      .reduce((sum, item) => {
        const priceValue = item;
        if (Number.isInteger(priceValue)) {
          return sum + priceValue;
        }
        return sum;
      });
  }

  getTax = () => 0.0;

  getTotal = () => this.getSubtotal() + this.getTax();

  isCartEmpty = () => this.cartService.items.length == 0;

  isOrderInvalid = () => !this.nameForOrder || this.isCartEmpty();

  onClose = () => this.cartClosed.emit();
}
