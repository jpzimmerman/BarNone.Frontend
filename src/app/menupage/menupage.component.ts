import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit, AfterViewChecked {
  allItems: Cocktail[] = []
  allTags: string[] = []
  classics: Cocktail[] = []
  specialties: Cocktail[] = []
  shots: Cocktail[] = []
  selectedTags: string[] = []
  dataService: DataService
  cartService: CartService

  constructor(dataService: DataService, cartService: CartService) {
    this.dataService = dataService;
    this.cartService = cartService;

  }

  async ngOnInit() {
    this.allTags = await this.dataService.getTags();
    this.allItems = await this.dataService.getMenuItems();
  }
  
  ngAfterViewChecked(): void {
    this.sortMenuItems();
  }

  async sortMenuItems() {
    this.classics = this.getClassicItems();
    this.shots = this.allItems.filter(x => x.category == "Shots");
    this.specialties = this.allItems.filter(x => x.category == "Specialty");
  }

  getClassicItems = () => this.allItems.filter(x => x.category === "Classics")

  getTags = () => this.allTags;

  clearTagSelections = () => this.selectedTags = [];

  onAdded = (item: Cocktail) => this.cartService.addItemToCart(item);
}
