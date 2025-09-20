import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  workExperience = [
    {
      id: 1,
      company: "4Ps Party-list Regional Office",
      position: "Web Developer",
      duration: "1 Year",
      startDate: "Jul 2024",
      endDate: "Jul 2025",
      responsibilities: [
        "Designed and developed 2 in-house web applications, streamlining workflows and improving operational efficiency across departments.",
        "Developed a centralized web system to replace Excel-based recordkeeping and streamline data management across 6 offices, improving consistency and accessibility.",
        "Led the development of the system’s database schema using MySQL.",
        "Collaborated with the concerned office to analyze and model data requirements for a confidential project.",
        "Designed and deployed a PDF reporting module to track and verify transactions."
      ]
    },
    {
      id: 2,
      company: "Eastern Samar State University - Main Library",
      position: "IT Intern",
      duration: "3 Months",
      startDate: "Aug 2023",
      endDate: "Oct 2023",
      responsibilities: [
        "Designed and developed a custom Library Management System tailored to the library’s workflow and requirements.",
        "Built the application using C# with VB.NET, integrating features for book cataloging, borrower management, and transaction tracking.",
        "Implemented search and filter functionalities to improve book retrieval efficiency.",
        "Added automated overdue book tracking and reporting features to streamline staff workload."
      ]
    }
  ];
  
}
