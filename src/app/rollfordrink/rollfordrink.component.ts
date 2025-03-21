import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rollfordrink',
  imports: [MatButtonModule],
  templateUrl: './rollfordrink.component.html',
  styleUrl: './rollfordrink.component.scss',
})
export class RollfordrinkComponent implements OnInit {
  constructor() {
    document.documentElement.style.setProperty(
      '--startAngleX',
      `${Math.random() * 360}` + 'deg'
    );
    document.documentElement.style.setProperty(
      '--startAngleY',
      `-${Math.random() * 360}` + 'deg'
    );
    document.documentElement.style.setProperty(
      '--startAngleZ',
      `${Math.random() * 360}` + 'deg'
    );
  }

  async ngOnInit(): Promise<void> {
    document.documentElement.style.setProperty(
      '--startAngleX',
      `${Math.random() * 360}` + 'deg'
    );
    document.documentElement.style.setProperty(
      '--startAngleY',
      `-${Math.random() * 360}` + 'deg'
    );
    document.documentElement.style.setProperty(
      '--startAngleZ',
      `${Math.random() * 360}` + 'deg'
    );
  }

  onRoll() {
    var dieElement = document.getElementById('d20-die');
    var dieElementParent = document.getElementById('d20-die-parent');
    dieElement?.classList.add('rolling');
    dieElementParent?.classList.add('rolling-transit');

    setTimeout(() => {
      dieElement?.classList.remove('rolling');
    }, 5000);

    var diceRollingSound = new Audio('../../assets/sound/dice-rolling.mp3');
    diceRollingSound.volume = 0.1;
    diceRollingSound.play();
  }
}
