import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss'
})
export class SectionTitle {

  sectionTitle = input<string>('Section Title Here');
  sectionDescription = input<string>('Brief description');

}
