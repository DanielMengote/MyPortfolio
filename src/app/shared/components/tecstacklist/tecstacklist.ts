import { Component, input } from '@angular/core';
import { TechStackInterface } from '../../models/interfaces/tech-stack-interface';

@Component({
  selector: 'app-tecstacklist',
  imports: [],
  templateUrl: './tecstacklist.html',
  styleUrl: './tecstacklist.scss'
})
export class Tecstacklist {

  techStackList = input<TechStackInterface[]>([]);


}
