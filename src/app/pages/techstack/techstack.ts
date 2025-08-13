import { Component } from '@angular/core';
import { TechstackIcons } from "../../shared/components/techstack-icons/techstack-icons";

@Component({
  selector: 'app-techstack',
  imports: [TechstackIcons],
  templateUrl: './techstack.html',
  styleUrl: './techstack.scss'
})
export class Techstack {

  svgFiles = [
  { id: 1, filename: "js-svgrepo-com.svg", alt: "javascript-svg", name: "JavaScript" },
  { id: 2, filename: "php-svgrepo-com.svg", alt: "php-svg", name: "PHP" },
  { id: 3, filename: "typescript-icon-svgrepo-com.svg", alt: "typescript-svg", name: "TypeScript" },
  { id: 4, filename: "c-seeklogo.svg", alt: "c++-svg", name: "C++" },
  { id: 5, filename: "mysql-logo-svgrepo-com.svg", alt: "mysql-svg", name: "MySQL" },
  { id: 6, filename: "html-5-svgrepo-com.svg", alt: "html-svg", name: "HTML" },
  { id: 7, filename: "css-3-svgrepo-com.svg", alt: "css-svg", name: "CSS" },
  { id: 8, filename: "angular-svgrepo-com.svg", alt: "angular-svg", name: "Angular" },
  { id: 9, filename: "laravel-svgrepo-com.svg", alt: "laravel-svg", name: "Laravel" },
  { id: 10, filename: "bootstrap-svgrepo-com.svg", alt: "bootstrap-svg", name: "Bootstrap" },
  { id: 11, filename: "git-svgrepo-com.svg", alt: "git-svg", name: "Git" },
  { id: 12, filename: "jquery-svgrepo-com.svg", alt: "jquery-svg", name: "jQuery" },
  { id: 13, filename: "tailwind-svgrepo-com.svg", alt: "tailwind-svg", name: "Tailwind" },
  { id: 14, filename: "figma-svgrepo-com.svg", alt: "figma-svg", name: "Figma" },
  { id: 15, filename: "github-color-svgrepo-com.svg", alt: "github-svg", name: "GitHub" },
  { id: 16, filename: "npm-svgrepo-com.svg", alt: "npm-svg", name: "NPM" },
  { id: 17, filename: "vscode3-svgrepo-com.svg", alt: "vscode-svg", name: "VS Code" },
  { id: 18, filename: "xampp-svgrepo-com.svg", alt: "xampp-svg", name: "XAMPP" }
];





}
