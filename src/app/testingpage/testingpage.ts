import { Component } from '@angular/core';
import { SwalComponent, SwalDirective } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-testingpage',
  imports: [SwalComponent, SwalDirective],
  templateUrl: './testingpage.html',
  styleUrl: './testingpage.scss'
})
export class Testingpage {

}
