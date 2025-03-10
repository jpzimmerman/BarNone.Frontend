import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { clamp } from 'lodash';

@Component({
  selector: 'app-quantity',

  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class QuantityComponent {
  @Input() itemQuantity: number = 0;
  @Output() quantityChange = new EventEmitter<number>();

  decreaseQty = () => {
    this.itemQuantity = clamp(this.itemQuantity--, 0, this.itemQuantity);
    return this;
  };

  increaseQty = () => {
    this.itemQuantity++;
    return this;
  };

  quantityChanged = () => this.quantityChange.emit(this.itemQuantity);

  resetQty = () => (this.itemQuantity = 0);
}
