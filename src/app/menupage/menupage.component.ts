import { Component, OnInit, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Cocktail } from '../models/cocktail.model';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {
[x: string]: any;
  allItems: Cocktail[] = []
  classics: Cocktail[] = []
  specialties: Cocktail[] = []
  shots: Cocktail[] = []
  dataService: DataService
  cartService: CartService

  constructor(dataService: DataService, cartService: CartService) {
    this.dataService = dataService;
    this.cartService = cartService;

  }

  async ngOnInit(): Promise<void> {
    this.allItems = this.dataService.getMenuItems();
  }
  
  ngAfterViewChecked(): void {
    this.classics = this.allItems.filter(x => x.category == "Classics");
    this.shots = this.allItems.filter(x => x.category == "Shots");
    this.specialties = this.allItems.filter(x => x.category == "Specialty");
  }

  async getMenuItems() {
    this.classics = this.allItems.filter(x => x.category == "Classics");
    this.shots = this.allItems.filter(x => x.category == "Shots");
  }

  getClassicItems = () => this.allItems.filter(x => x.category === "Classics")

  onAdded(item: Cocktail) { 
    this.cartService.addItemToCart(item);
  }
}
