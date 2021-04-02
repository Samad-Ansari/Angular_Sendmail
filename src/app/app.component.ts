import { Component } from '@angular/core';
import { MailService } from './mail.service';
import { Router } from '@angular/router';
import { Mail } from './mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sendmail';
  mailData = new Mail('', '', '', +987654321, '');


  constructor(private _mailService: MailService, private router: Router) {}

  sendMail(ngForm) {
    console.log(ngForm);
  	this._mailService.sendMail(this.mailData)
  	.subscribe(
  		data => {
  			console.log(this.mailData);
  			this.router.navigate(['/']);
  		},
  		error => {
  			console.log(error);
  		}
  	)
  }
}