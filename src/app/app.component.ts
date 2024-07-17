import { Component, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BarNone.Frontend';

  constructor(public dialog: MatDialog, public cartService: CartService) {
  }

  openCartView() {
    let dialogRef = this.dialog.open(ShoppingCartComponent, {width: '35%', height:'40%', data : {productsInCart:this.cartService.items}})
}

  getShoppingCartQuantity = () : number => this.cartService.items.length

}