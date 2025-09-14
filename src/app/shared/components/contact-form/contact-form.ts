import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contacts } from '../../models/interfaces/contacts';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  fb = inject(FormBuilder);

  formSubmit = output<Contacts>();

  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.fb.group({
      name: [''],
      email: ['', Validators.email],
      message: [''],
    });
  }

  onSubmit(){
    if(this.contactForm.valid){
      this.formSubmit.emit(this.contactForm.value);
      this.contactForm.reset();
    }else{
      alert('Please fill out the form correctly');
    }
  }

  
}
