import { Component, inject, OnInit, signal } from '@angular/core';
import Typewriter from 't-writer.js';
import { SocialsButtons } from "../../shared/components/buttons/socials-buttons/socials-buttons";
import { SocialsService } from '../../shared/services/socials-service';
import { SocialInterface } from '../../shared/models/interfaces/social-interface';

@Component({
  selector: 'app-home',
  imports: [SocialsButtons],
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
        .rest(500)
        .remove(16) 
        .type("A Problem Solver.")
        .rest(500)
        .remove(17) 
        .type("A Lifelong Learner.")
        .rest(500)
        .remove(21) 
        .type("Passionate about clean code.")
        .rest(1000)
        .remove(28) 
        .type("Turning your ideas into reality.")
        .rest(1000)
        .remove(27) 
        .start();
} 

}
