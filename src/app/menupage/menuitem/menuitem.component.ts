import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { AdditemComponent } from 'src/app/modals/additem/additem.component';
import { Cocktail } from 'src/app/models/cocktail.model';
import { QuantityComponent } from 'src/app/widgets/quantity/quantity.component';
import { QuantityModule } from 'src/app/widgets/quantity/quantity.module';

@Component({
  selector: 'app-menuitem',

  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.scss',
  imports: [CurrencyPipe, MatCardModule, QuantityModule, QuantityComponent],
})
export class MenuitemComponent {
  @Input() item: Cocktail = new Cocktail(0, 'aa', 'bb', 0, 'Classics');
  @Output() quantityChange = new EventEmitter<number>();
  @Output() itemOrdered = new EventEmitter<Cocktail>();

  quantity: number = 0;

  public constructor(public dialog: MatDialog) {}

  resetQty = () => (this.quantity = 0);

  onQuantityChange(quantity: number) {
    this.quantity = quantity;
  }

  emitItemForCart() {
    if (this.quantity) {
      this.item.quantity = this.quantity;
      this.itemOrdered.emit(this.item);
      this.resetQty();
    }
  }

  openAddItemDialog() {
    this.dialog
      .open(AdditemComponent, {
        width: '30%',
        height: '45%',
        data: { itemName: this.item.name, itemQuantity: this.quantity },
      })
      .afterClosed()
      .subscribe((returnValues) => {
        alert(JSON.stringify(returnValues));
        if (returnValues.quantity) {
          this.quantity = returnValues.quantity;
          this.item.quantity = returnValues.quantity;
          this.item.specialInstructions = returnValues.specialInstructions;
          this.emitItemForCart();
        }
      });
  }
}
