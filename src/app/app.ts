import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
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
export class App implements  OnInit  {
  protected readonly title = signal('portfolio');

   ngOnInit() {
    AOS.init({
      offset: 120,
      duration: 1000, 
      once: true ,
    });
  }
}
