import { Component } from '@angular/core';
import { CardProjects } from '../../shared/components/card-projects/card-projects';

@Component({
  selector: 'app-projects',
  imports: [CardProjects],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  title = "My first Card";
  description = "My cards description";

  
  cardDetails = [{
    id: 1,
    image: "image-1",
    title: 'For Developers',
    description: 'Prototype ideas online, without depending on your local environment.'
  }, {
    id: 2,
    image: "image-2",
    title: 'For Designers',
    description: 'Create prototypes and share them with your team in a secure environment.'
  },{
    id: 3,
    image: "image-3",
    title: 'For Managers',
    description: 'Collaborate with your team to create prototypes and share them with your team in a secure environment.'
  },
  {
    id: 4,
    image: "image-2",
    title: 'For Customers',
    description: 'Test prototypes and share them with your team in a secure environment.'
  }
]

}
