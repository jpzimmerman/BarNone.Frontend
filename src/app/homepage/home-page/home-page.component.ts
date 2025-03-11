import { Component } from '@angular/core';
import { SpinnerComponent } from 'src/app/spinner/spinner/spinner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
