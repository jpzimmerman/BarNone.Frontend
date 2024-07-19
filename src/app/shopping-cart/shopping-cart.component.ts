import { Component, EventEmitter, Inject, Injectable } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { DataService } from '../services/data/data.service';
import { Product } from '../models/product.model';
import { GuestOrder } from '../models/guestorder.model';

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
      var key = this.products.indexOf(item)
      this.products.splice(key, 1)
    }

    onCustomerOrder() {
      var tmpOrder = new GuestOrder();
      tmpOrder.name = this.nameForOrder;
      tmpOrder.items = this.cartService.items;
      this.dataService.addGuestOrder(tmpOrder);
      this.cartClosed.emit();
      this.cartService.items = [];

    }

    onClose = () => this.cartClosed.emit();
  }

