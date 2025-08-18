import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacts } from '../../shared/models/interfaces/contacts';


@Component({
  selector: 'app-contact',  
  imports: [FormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {


  contactForm:  Contacts = {
    name: '',
    email: '',
    message: ''
  }

  sendEmail(){
    console.log("test");
  };



}
