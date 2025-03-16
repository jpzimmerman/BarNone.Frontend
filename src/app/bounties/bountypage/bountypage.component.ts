import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-bountypage',
  standalone: true,
  imports: [],
  templateUrl: './bountypage.component.html',
  styleUrl: './bountypage.component.scss',
})
export class BountypageComponent implements OnInit, AfterViewInit {
  allItems: Cocktail[] = [];
  bounties: Cocktail[] = [];
  bountyHeader: string = '';
  bountyDescription: string = '';

  constructor(public dataService: DataService) {}

  async ngOnInit() {
    this.allItems = await this.dataService.getMenuItems();
  }

  async ngAfterViewInit(): Promise<void> {
    setTimeout(() => {
      this.bounties = this.allItems.filter((x) => x.category == 'Shots');
      this.bountyHeader = this.bounties[0].name;
      this.bountyDescription = this.bounties[0].description;
    }, 100);
  }
}
