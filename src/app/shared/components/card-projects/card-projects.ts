import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  imports: [],
  templateUrl: './card-projects.html',
  styleUrl: './card-projects.scss'
})
export class CardProjects {


  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() image: string = 'imageFileName';


}
