import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Product } from 'src/app/models/product.model';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bounty',
  imports: [CommonModule, MatButton],
  templateUrl: './bounty.component.html',
  styleUrl: './bounty.component.scss',
})
export class BountyComponent {
  @Input() bountyName: string = '';
  @Input() product: Cocktail = new Cocktail(0, 'aa', 'bb', 0, 'Shots');
  @Output() bountyTaken: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  emitItemForCart() {
    this.product.quantity = 1;
    this.bountyTaken.emit(this.product);
  }
}
