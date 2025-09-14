import { Component, input } from '@angular/core';
import { CertificatesInterface } from '../../models/interfaces/certificates-interface';

@Component({
  selector: 'app-certificate-card',
  imports: [],
  templateUrl: './certificate-card.html',
  styleUrl: './certificate-card.scss'
})
export class CertificateCard {

  certificatesList = input<CertificatesInterface[]>([]);

}
