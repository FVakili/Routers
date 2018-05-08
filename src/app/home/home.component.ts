import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private loginservice: LoginService) { }

  ngOnInit() {
  }

  onlogin() {
    this.loginservice.login();

  }

  onlogout() {
    this.loginservice.logout();

  }


}
