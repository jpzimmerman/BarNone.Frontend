import { Component } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-bountypage',
  standalone: true,
  imports: [],
  templateUrl: './bountypage.component.html',
  styleUrl: './bountypage.component.scss',
})
export class BountypageComponent {
  bounties: Cocktail[] = [];

  constructor(public dataService: DataService) {}
}
