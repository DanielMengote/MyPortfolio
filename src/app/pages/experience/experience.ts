import { Component, inject, signal } from '@angular/core';
import { WorkExperienceService } from '../../shared/services/work-experience-service';
import { WorkExperienceInterface } from '../../shared/models/interfaces/work-experience-interface';
import { SectionTitle } from "../../shared/components/section-title/section-title";
import { ExperienceList } from "../../shared/components/experience-list/experience-list";

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, ExperienceList],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {


  private workExpService = inject(WorkExperienceService);

  workExperience = signal<WorkExperienceInterface[]>(this.workExpService.workExperience);

}
