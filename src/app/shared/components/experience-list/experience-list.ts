import { Component, input } from '@angular/core';
import { WorkExperienceInterface } from '../../models/interfaces/work-experience-interface';

@Component({
  selector: 'app-experience-list',
  imports: [],
  templateUrl: './experience-list.html',
  styleUrl: './experience-list.scss'
})
export class ExperienceList {

  workExperienceList = input<WorkExperienceInterface[]>([]);

}
