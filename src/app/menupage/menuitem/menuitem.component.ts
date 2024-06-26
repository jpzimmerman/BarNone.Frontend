import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditemComponent } from 'src/app/modals/additem/additem.component';
import { Cocktail } from 'src/app/models/cocktail.model';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.scss'
})
export class MenuitemComponent {
  @Input() item: Cocktail = new Cocktail("aa", "bb", 0, "Classics");
  @Output() quantityChange = new EventEmitter<number>();
  @Output() itemOrdered = new EventEmitter<Cocktail>();

  quantity: number = 0

  public constructor(public dialog: MatDialog) {

  }

  decreaseQty() {
    this.quantity--;
    if (this.quantity < 0) {this.quantity = 0}
  }

  increaseQty() {
    this.quantity++;
  }

  emitItemForCart() {
    this.itemOrdered.emit(this.item);
  }

  openAddItemDialog() {
      let dialogRef = this.dialog.open(AdditemComponent, {width: '25%', height:'40%', data:{itemName:this.item.name}})
  }
}

