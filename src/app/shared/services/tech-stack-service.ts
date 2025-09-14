import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechStackService {
  
  
  techstackSvgFiles = [
  { id: 1, filename: "js-svgrepo-com.svg", alt: "javascript-svg", name: "JavaScript", filepath: "techstack" },
  { id: 2, filename: "php-svgrepo-com.svg", alt: "php-svg", name: "PHP" ,filepath: "techstack"},
  { id: 3, filename: "typescript-icon-svgrepo-com.svg", alt: "typescript-svg", name: "TypeScript" , filepath: "techstack"},
  { id: 4, filename: "c-seeklogo.svg", alt: "c++-svg", name: "C++" , filepath: "techstack"},
  { id: 5, filename: "mysql-logo-svgrepo-com.svg", alt: "mysql-svg", name: "MySQL" , filepath: "techstack"},
  { id: 6, filename: "html-5-svgrepo-com.svg", alt: "html-svg", name: "HTML" , filepath: "techstack"},
  { id: 7, filename: "css-3-svgrepo-com.svg", alt: "css-svg", name: "CSS" , filepath: "techstack"},
  { id: 8, filename: "angular-svgrepo-com.svg", alt: "angular-svg", name: "Angular" , filepath: "techstack"},
  { id: 9, filename: "laravel-svgrepo-com.svg", alt: "laravel-svg", name: "Laravel" , filepath: "techstack"},
  { id: 10, filename: "bootstrap-svgrepo-com.svg", alt: "bootstrap-svg", name: "Bootstrap" , filepath: "techstack"},
  { id: 11, filename: "git-svgrepo-com.svg", alt: "git-svg", name: "Git" , filepath: "techstack"},
  { id: 12, filename: "jquery-svgrepo-com.svg", alt: "jquery-svg", name: "jQuery" , filepath: "techstack"},
  { id: 13, filename: "tailwind-svgrepo-com.svg", alt: "tailwind-svg", name: "Tailwind" , filepath: "techstack"},
  { id: 14, filename: "figma-svgrepo-com.svg", alt: "figma-svg", name: "Figma" , filepath: "techstack"},
  { id: 15, filename: "github-color-svgrepo-com.svg", alt: "github-svg", name: "GitHub" , filepath: "techstack"},
  { id: 16, filename: "npm-svgrepo-com.svg", alt: "npm-svg", name: "NPM" , filepath: "techstack"},
  { id: 17, filename: "vscode3-svgrepo-com.svg", alt: "vscode-svg", name: "VS Code" , filepath: "techstack"},
  { id: 18, filename: "xampp-svgrepo-com.svg", alt: "xampp-svg", name: "XAMPP" , filepath: "techstack"},
];


  otherToolsSvgFiles = [
  { id: 1, filename: "office-365-logo-svgrepo-com.svg", alt: "msOfiice", name: "MS Office" , filepath: "othertools"},
  { id: 2, filename: "photoshop-svgrepo-com.svg", alt: "Photosop", name: "Photosohp" , filepath: "othertools"}
  
];

}
