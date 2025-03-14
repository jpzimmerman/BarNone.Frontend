import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { DataService } from '../services/data/data.service';
import { Product } from '../models/product.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-shopping-cart',

  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CurrencyPipe,
  ],
})
export class ShoppingCartComponent {
  @Input() nameForOrder: string = '';
  @Output() nameForOrderControlChange = new EventEmitter();
  products: Cocktail[] = [];
  subtotal: number = 0.0;
  nameForOrderControl: FormControl = new FormControl(this.nameForOrder, [
    Validators.required,
    Validators.minLength(2),
  ]);

  cartClosed = new EventEmitter();

  constructor(
    public dataService: DataService,
    public cartService: CartService,
    public dialogRef: MatDialogRef<ShoppingCartComponent>
  ) {
    this.products = cartService.items;
  }

  removeItem = (item: Product) => this.cartService.removeItemFromCart(item);

  async onCustomerOrder() {
    const tmpOrder = {
      name: this.nameForOrder,
      items: this.cartService.items,
      orderId: 0,
      specialInstructions: '',
      total: 0.0,
      loyaltyProgramId: '',
    };
    await this.dataService.addGuestOrder(tmpOrder);
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
