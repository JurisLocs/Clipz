import { Component } from '@angular/core';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email:'',
    password: ''
  }

  showAlert = false
  alertMsg = 'Login successful!'
  alertColor = 'blue'

  login(){
    this.showAlert = true
    this.alertMsg = 'Login successful!'
    this.alertColor = 'blue'
  }
}
