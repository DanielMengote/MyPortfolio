import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Contacts } from '../models/interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    sendEmail(formData: Contacts): Promise<void> {
    // Use emailjs.send (NOT sendForm)
    return emailjs
      .send(
        'service_qro1pd9',      // Service ID
        'template_chy24ml',     // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },                       // pass as object
        'xU_PPaozjAtvyiNt2'     // Public key
      )
      .then(() => {
        console.log('SUCCESS!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        throw error;
      });
  }
}
