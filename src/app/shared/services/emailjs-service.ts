import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Contacts } from '../models/interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    sendEmail(formData: Contacts): Promise<void> {
    
    return emailjs
      .send(
        'service_qro1pd9',      
        'template_chy24ml',     
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },                      
        'xU_PPaozjAtvyiNt2'     
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
