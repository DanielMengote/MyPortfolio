import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacts } from '../../shared/models/interfaces/contacts';
import { SocialsService } from '../../shared/services/socials-service';
import { SocialInterface } from '../../shared/models/interfaces/social-interface';
import { SocialsButtons } from "../../shared/components/buttons/socials-buttons/socials-buttons";
import { EmailService } from '../../shared/services/emailjs-service';
import { ContactForm } from "../../shared/components/contact-form/contact-form";

@Component({
  selector: 'app-contact',  
  imports: [FormsModule, SocialsButtons, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private socialsService = inject(SocialsService);
  private emailService = inject(EmailService);

  socialsList =  signal<SocialInterface[]>(this.socialsService.socials);

  public sendEmail(formData: Contacts) {
    this.emailService.sendEmail(formData)
    .then(() => {
      console.log('Email sent successfully');
    })
    .catch(err => {
      console.error('Error sending email', err);
    }); 
  }



}
