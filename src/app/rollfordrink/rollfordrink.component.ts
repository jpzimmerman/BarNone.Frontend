import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rollfordrink',
  imports: [MatButtonModule],
  templateUrl: './rollfordrink.component.html',
  styleUrl: './rollfordrink.component.scss',
})
export class RollfordrinkComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    document.documentElement.style.setProperty('--startAngleX', '0deg');
    document.documentElement.style.setProperty('--startAngleY', '160deg');
    document.documentElement.style.setProperty('--startAngleZ', '40deg');
  }

  onRoll() {
    var diceRollingSound = new Audio('../../assets/sound/dice-rolling.mp3');
    diceRollingSound.play();
  }
}
