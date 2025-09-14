import { Component, inject, input } from '@angular/core';
import { SocialsService } from '../../../services/socials-service';
import { SocialInterface } from '../../../models/interfaces/social-interface';

@Component({
  selector: 'app-socials-buttons',
  imports: [],
  templateUrl: './socials-buttons.html',
  styleUrl: './socials-buttons.scss'
})
export class SocialsButtons {


  socialsAccounts = input<SocialInterface[]>([]);

}
