import { Component } from '@angular/core';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: ``
})
export class ContactoComponent {

  constructor(private contactoServ: ContactoService) {

  }

  sendComment(email:string, comment:string) {
    this.contactoServ.sendComment(email, comment);
  }
}
