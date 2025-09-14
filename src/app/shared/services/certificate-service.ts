import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  
   certificateList = [
    {
      id: 1,
      filename: 'CSC-image.jpg',
      alt: 'CSC-cert',
      certificateName: 'Civil Service Exam - Professional (Passed)',
      certificateDescription: 'Passed the CSE Professional',
      datePassed: 'March 3, 2025',
      status: 'Passed',
      orientation: 'Landscape'
    },
     {
      id: 2,
      filename: 'CSS-NC2.png',
      alt: 'CSS-NC2-cert',
      certificateName: 'Computer System Servicing - National Certificate 2',
      certificateDescription: 'TESDA (Technical Education and Skills Development Authority) National Certificate (NC) Level IIView Certificate',
      datePassed: 'March 2025',
      status: 'Passed',
      orientation: 'Portrait'


    },
    {
      id: 3,
      filename: 'COURSERA-TechSupp-fundamentals.png',
      alt: 'TechSupp-fundamentals-cert',
      certificateName: 'Coursera - Technical Support Fundamentals',
      certificateDescription: 'Earned Google’s Technical Support Fundamentals certificate on Coursera, covering IT support basics.',
      datePassed: 'May 13, 2024',
      status: 'Passed',
      orientation: 'Landscape'
    }
  ]

}
