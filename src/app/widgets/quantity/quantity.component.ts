import { Component, EventEmitter, Input, Output } from '@angular/core';
import { clamp } from 'lodash'

@Component({
  selector: 'app-quantity',
  standalone: false,
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss'
})
export class QuantityComponent {

  @Input() itemQuantity: number = 0
  @Output() quantityChange = new EventEmitter<number>();

  decreaseQty = () => {
    this.itemQuantity = clamp(this.itemQuantity--, 0, this.itemQuantity);
    return this;
  }

  increaseQty = () => {
    this.itemQuantity++;
    return this;
  }

  quantityChanged = () => this.quantityChange.emit(this.itemQuantity)

  resetQty = () => this.itemQuantity = 0;

}
