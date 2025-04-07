import {
  Input,
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';
import { CookieService } from 'ngx-cookie-service';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menupage',

  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss'],
  imports: [
    FormsModule,

    MatButtonToggleGroup,
    MatButtonModule,
    MatButtonToggle,
    MatCardModule,
    MatListModule,
    MenuitemComponent,
  ],
})
export class MenupageComponent implements OnInit, AfterViewInit {
  @Input() allItems: Cocktail[] = [];
  allTags: string[] = [];
  classics: Cocktail[] = [];
  specialties: Cocktail[] = [];
  mocktails: Cocktail[] = [];
  shots: Cocktail[] = [];
  @Input() selectedTags: string[] = [];

  constructor(
    public dataService: DataService,
    public cartService: CartService,
    public cookieService: CookieService,
    public cdRef: ChangeDetectorRef
  ) {
    if (cookieService.check('shopping-cart')) {
      this.cartService.items = JSON.parse(cookieService.get('shopping-cart'));
    }
  }

  async ngOnInit() {
    this.allTags = await this.dataService.getTags();
    this.allItems = await this.dataService.getMenuItems();
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
    this.mocktails = this.allItems.filter((x) => x.category == 'Mocktails');
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
    this.classics = [...finalList].filter((x) => x.category === 'Classics');
    this.specialties = [...finalList].filter((x) => x.category === 'Specialty');
  }

  clearTagSelections() {
    this.selectedTags = [];
    this.sortMenuItems();
  }

  onAdded = (item: Cocktail) => this.cartService.addItemToCart(item);
}
