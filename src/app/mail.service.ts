import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mail: Mail;
  private _url: string = "http://localhost:3000/send";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) { }

  sendMail(mail: Mail) {
  	return this.http.post<any>(this._url,mail, {headers: this.headers});
  }
}
