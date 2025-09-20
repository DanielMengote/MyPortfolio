import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { Footer } from "../../shared/components/footer/footer";
import { Home } from "../home/home";
import { Aboutme } from "../aboutme/aboutme";
import { Techstack } from "../techstack/techstack";
import { Experience } from "../experience/experience";
import { Certificates } from "../certificates/certificates";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-index',
  imports: [Navbar, Footer, Home, Aboutme, Techstack, Experience, Certificates, Contact],
  templateUrl: './index.html',
  styleUrl: './index.scss'
})
export class Index {

}
