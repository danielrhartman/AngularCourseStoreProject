import { AuthService } from '../../shared/services/auth.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  constructor(private auth: AuthService) {}

  login(){
    this.auth.login();
  }

}
