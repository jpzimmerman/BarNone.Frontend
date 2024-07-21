import { Component, EventEmitter, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { DataService } from '../services/data/data.service';
import { Product } from '../models/product.model';
import { GuestOrder } from '../models/guestorder.model';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  nameForOrder: string = ""
  products: Cocktail[] = [];
  cartClosed = new EventEmitter();
  cartFormControl: FormControl = new FormControl()


  constructor(public dataService: DataService, public cartService: CartService, public dialogRef: MatDialogRef<ShoppingCartComponent>) {
      this.products = cartService.items;
    }
    
    ngOnInit() {
      this.cartFormControl = new FormControl(this.nameForOrder, [Validators.required])      
    }

    removeItem(item: Product) {
      this.cartService.removeItemFromCart(item);
    }

    onCustomerOrder() {
      const tmpOrder = new GuestOrder();
      tmpOrder.name = this.nameForOrder;
      tmpOrder.items = this.cartService.items;
      this.dataService.addGuestOrder(tmpOrder);
      this.cartClosed.emit();
      this.cartService.items = [];
    }

    onClose = () => this.cartClosed.emit();
  }

