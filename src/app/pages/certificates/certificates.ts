import { Component, inject, signal } from '@angular/core';
import { SectionTitle } from "../../shared/components/section-title/section-title";
import { CertificateService } from '../../shared/services/certificate-service';
import { CertificatesInterface } from '../../shared/models/interfaces/certificates-interface';
import { CertificateCard } from "../../shared/components/certificate-card/certificate-card";

@Component({
  selector: 'app-certificates',
  imports: [SectionTitle, CertificateCard],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates {

 private certificatesService = inject(CertificateService);

 certificates = signal<CertificatesInterface[]>(this.certificatesService.certificateList)

}
