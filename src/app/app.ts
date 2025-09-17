import { AfterViewInit, Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Home } from './pages/home/home';
import { Footer } from "./shared/components/footer/footer";
import { Techstack } from "./pages/techstack/techstack";
import { Experience } from "./pages/experience/experience";
import { Contact } from "./pages/contact/contact";
import { Aboutme } from "./pages/aboutme/aboutme";
import { Certificates } from "./pages/certificates/certificates";
import AOS from 'aos';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, Footer, Techstack, Experience, Contact, Aboutme, Certificates, Navbar],
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
