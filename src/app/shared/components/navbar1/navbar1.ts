import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  imports: [],
  templateUrl: './navbar1.html',
  styleUrl: './navbar1.scss'
})
export class Navbar1 {
 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
