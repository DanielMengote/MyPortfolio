import { AfterViewInit, Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from "./shared/components/footer/footer";
import AOS from 'aos';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Footer,Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');

  private ngZone = inject(NgZone);

  constructor(){

  }
  ngAfterViewInit(): void {
   this.ngZone.runOutsideAngular(() => {
      AOS.init({
        duration: 800,
        once: true, // animate only once
        easing: 'ease-in-out',
        mirror: false, // don’t re-animate on scroll back
        startEvent: 'load', // wait until window is fully loaded
      });

      // Give Angular a tick to render all components before refreshing AOS
      setTimeout(() => {
        AOS.refreshHard();
      }, 500);
    });
  }

}
