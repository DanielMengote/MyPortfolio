import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  ngOnInit(): void {
    const target = document.querySelector('.tw') as HTMLElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
      typeColor: ''
    })
      writer
      .strings(
        400,
        "Fullstack Web Developer.",
        "IT Support Specialist.", 
        "Computer Enthusiast."
      )
      .start()
} 

}
