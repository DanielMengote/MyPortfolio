import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-techstack-icons',
  imports: [],
  templateUrl: './techstack-icons.html',
  styleUrl: './techstack-icons.scss'
})
export class TechstackIcons {

  @Input() svgName: string = ('Icon Name');
  @Input() fileName: string = ('File Name');
  @Input() altName: string = ('Alt Name');

}
