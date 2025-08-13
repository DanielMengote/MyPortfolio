import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companylogos',
  imports: [CommonModule],
  templateUrl: './companylogos.html',
  styleUrl: './companylogos.scss'
})
export class Companylogos implements OnInit{

  logos = [
    'slack',
    'framer',
    'netflix',
    'google',
    'linkedin',
    'instagram',
    'facebook',
  ];

   displayLogos: string[] = [];

   ngOnInit(): void {
    // Duplicate the array so it loops seamlessly
    this.displayLogos = [...this.logos, ...this.logos];
  }

  getLogoUrl(name: string): string {
    return `https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${name}.svg`;
  }

}
