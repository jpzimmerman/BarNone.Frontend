import {
  AfterViewInit,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { DataService } from 'src/app/services/data/data.service';
import { BountyComponent } from './bounty/bounty.component';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-bountypage',
  standalone: true,
  imports: [BountyComponent],
  templateUrl: './bountypage.component.html',
  styleUrl: './bountypage.component.scss',
})
export class BountypageComponent implements OnInit, AfterViewInit {
  allItems: Cocktail[] = [];
  bounties: Cocktail[] = [];

  constructor(
    public dataService: DataService,
    public cartService: CartService,
    public cdRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.bounties = this.dataService
      .getCachedMenuItems()
      .filter((x) => x.category == 'Shots');
    this.cdRef.detectChanges();
  }

  async ngAfterViewInit(): Promise<void> {
    setTimeout(() => {
      this.bounties = this.bounties.filter((x) => x.category == 'Shots');
      this.cdRef.detectChanges();
    }, 10);
  }

  onAdded = (item: Cocktail) => this.cartService.addItemToCart(item);
}
