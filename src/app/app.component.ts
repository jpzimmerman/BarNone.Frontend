import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './services/cart/cart.service';
import { DataService } from './services/data/data.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BarNone.Frontend';
  readonly dialogRef = inject(MatDialogRef<ShoppingCartComponent>);

  constructor(
    public dialog: MatDialog,
    public dataService: DataService,
    public cartService: CartService
  ) {
    dataService.getMenuItems();
  }

  openCartView() {
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      width: window.innerWidth > 900 ? '40%' : '90%',
      height: '60%',
      data: { productsInCart: this.cartService.items },
    });
    dialogRef.componentInstance.cartClosed.subscribe(() => {
      dialogRef.close();
    });
  }

  getShoppingCartQuantity = (): number => this.cartService.items.length;
}
