import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Home } from './pages/home/home';
import { Projects } from "./pages/projects/projects";
import { Footer } from "./shared/components/footer/footer";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
