import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private endpoint:string = 'https://pruebas.cubic100.com.co/rest-v2/';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  sendComment(email:string, comment: string) {
    if ( !email.length || !comment.length) return;
    this.http.post(`${this.endpoint}comment/`, {
      email,
      comment,
      _accion: '_saveComment'
    },
    {
      headers: {
        user: 'ws_test',
        password: 'cTEtUzF3Tzh6KU5f'}
    }).subscribe( (res:any) => {
      if ( res.success === 1 ) {
        this.toastr.success( res.msg, '!Hecho¡');
      }
    });
  }
}
