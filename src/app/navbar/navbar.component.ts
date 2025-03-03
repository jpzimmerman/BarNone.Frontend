import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  imports: [AppRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  hamburger = document.getElementById('hamburger');
  navUL = document.getElementById('nav-ul');

  async ngOnInit() {
    this.navUL = document.getElementById('nav-ul');

    this.hamburger?.addEventListener('click', () => {
      this.navUL?.classList.toggle('show');
    });
  }

  onHamburgerClick = () => {
    this.navUL?.classList.toggle('show');
  };
}
