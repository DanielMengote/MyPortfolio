import { Component, inject, OnInit, signal } from '@angular/core';
import Typewriter from 't-writer.js';
import { SocialsService } from '../../shared/services/socials-service';
import { SocialInterface } from '../../shared/models/interfaces/social-interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {


  
  private socialsService = inject(SocialsService);

  socialsList =  signal<SocialInterface[]>(this.socialsService.socials);

  ngOnInit(): void {
    const target = document.querySelector('.tw') as HTMLElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
      typeColor: ''
    })
     writer
      .type("A Web Developer.")
      .rest(800)
      .remove(16) 
      .type("A Problem Solver.")
      .rest(800)
      .remove(17) 
      .type("Turning ideas into reality.")
      .rest(1000)
      .remove(27) 
      .start();
} 

}
