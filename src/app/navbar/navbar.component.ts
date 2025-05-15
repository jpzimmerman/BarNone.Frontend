import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { DropdownClickOutsideDirective } from '../dropdown-click-outside.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AppRoutingModule, CommonModule, DropdownClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  hamburger = document.getElementById('hamburger');
  navUL = document.getElementById('nav-ul');
  isMenuOpened: boolean = true;

  async ngOnInit() {
    this.navUL = document.getElementById('nav-ul');

    this.hamburger?.addEventListener('click', () => {
      this.navUL?.classList.toggle('show');
    });
  }

  onHamburgerClick = () => {
    this.navUL?.classList.toggle('show');
  };

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside() {
    this.isMenuOpened = false;
    this.navUL?.classList.remove('show');
  }
}
