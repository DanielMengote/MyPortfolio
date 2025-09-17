import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  

   isNavbarVisible = true;
  private lastScrollTop = 0;

  

  
}
