import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  products: Cocktail[] = [new Cocktail("aa", "bb", 0.00, "Classics"), new Cocktail("bb", "cc", 0.00, "Classics")];

  constructor(public cartService: CartService, public dialogRef: MatDialogRef<ShoppingCartComponent>) {
      this.products = cartService.items;

    }

    removeItem(item: Product) {
      var key = this.products.indexOf(item)
      this.products.splice(key, 1)
    }

  }

