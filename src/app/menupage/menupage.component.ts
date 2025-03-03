import {
  Input,
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menupage',
  standalone: false,
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss'],
})
export class MenupageComponent
  implements OnInit, AfterViewChecked, AfterViewInit
{
  @Input() allItems: Cocktail[] = [];
  allTags: string[] = [];
  classics: Cocktail[] = [];
  specialties: Cocktail[] = [];
  shots: Cocktail[] = [];
  @Input() selectedTags: string[] = [];
  dataService: DataService;
  cartService: CartService;

  constructor(
    dataService: DataService,
    cartService: CartService,
    public cookieService: CookieService,
    public cdRef: ChangeDetectorRef
  ) {
    this.dataService = dataService;
    this.cartService = cartService;
    if (cookieService.check('shopping-cart')) {
      this.cartService.items = JSON.parse(cookieService.get('shopping-cart'));
    }
  }

  async ngOnInit() {
    this.allTags = await this.dataService.getTags();
    this.allItems = await this.dataService.getMenuItems();
  }

  ngAfterViewChecked(): void {
    //this.sortMenuItems();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sortMenuItems();
      this.cdRef.detectChanges(); // Manually trigger change detection
    }, 100);
  }

  async sortMenuItems() {
    this.classics = this.getClassicItems();
    this.shots = this.allItems.filter((x) => x.category == 'Shots');
    this.specialties = this.allItems.filter((x) => x.category == 'Specialty');
  }

  getClassicItems = () =>
    this.allItems.filter((x) => x.category === 'Classics');

  getTags = () => this.allTags;

  filterByTags() {
    const finishedList: Cocktail[] = [];
    if (this.selectedTags.length === 0) {
      this.clearTagSelections();
    }
    // filter classics list by each of the selected tags
    // combine lists, cast into Set for unique results
    this.selectedTags.forEach((tag) => {
      finishedList.push(...this.allItems.filter((x) => x.tags.includes(tag)));
    });
    const finalList = new Set(finishedList);
    this.classics = [...finalList];
  }

  clearTagSelections() {
    this.selectedTags = [];
    this.sortMenuItems();
  }

  onAdded = (item: Cocktail) => this.cartService.addItemToCart(item);
}
