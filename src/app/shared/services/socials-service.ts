import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  socials = [
    {
      id: 1,
      socialPlatform: 'facebook',
      link: 'https://web.facebook.com/daniel.mengote.5/',
      icon: 'fab fa-facebook-f'
    },
    {
      id: 2,
      socialPlatform: 'linkedin',
      link: 'https://www.linkedin.com/in/daniel-mengote',
      icon: 'fab fa-linkedin-in'

    },
    {
      id: 3,
      socialPlatform: 'Instagram',
      link: 'https://www.instagram.com/adanksss/',
      icon: 'fab fa-instagram'

    },
    {
      id: 4,
      socialPlatform: 'Gmail',
      link: 'mailto:danielmengote.work@gmail.com',
      icon: 'fas fa-envelope'
    }
  ]

  
}
