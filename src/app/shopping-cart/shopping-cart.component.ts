import { Component, EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { DataService } from '../services/data/data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  nameForOrder: string = ""
  products: Cocktail[] = [];
  cartClosed = new EventEmitter();

  constructor(public dataService: DataService, public cartService: CartService, public dialogRef: MatDialogRef<ShoppingCartComponent>) {
      this.products = cartService.items;
    }

    removeItem(item: Product) {
      this.cartService.removeItemFromCart(item);
    }

    onCustomerOrder() {
      const tmpOrder = {
        name: this.nameForOrder,
        items: this.cartService.items,
        orderId: 0,
        specialInstructions: '',
        total: 0.00,
        loyaltyProgramId: ''
      }
      this.dataService.addGuestOrder(tmpOrder)
      this.cartClosed.emit()
      this.cartService.items = []
      this.cartService.emptyCart()
    }

    isCartEmpty = () => this.cartService.items.length == 0

    isOrderInvalid = () => !this.nameForOrder  || this.isCartEmpty()

    onClose = () => this.cartClosed.emit()
  }

