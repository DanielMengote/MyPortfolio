import { Component, inject, signal } from '@angular/core';
import { TechStackService } from '../../shared/services/tech-stack-service';
import { TechStackInterface } from '../../shared/models/interfaces/tech-stack-interface';
import { Tecstacklist } from "../../shared/components/tecstacklist/tecstacklist";
import { SectionTitle } from "../../shared/components/section-title/section-title";

@Component({
  selector: 'app-techstack',
  imports: [Tecstacklist, SectionTitle],
  templateUrl: './techstack.html',
  styleUrl: './techstack.scss'
})
export class Techstack {

  
  private techstack = inject(TechStackService);

  techstackSvgFiles = signal<TechStackInterface[]>(this.techstack.techstackSvgFiles);
  otherToolsSvgFiles = signal<TechStackInterface[]>(this.techstack.otherToolsSvgFiles); ;


}
