import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private userService : UserService ){ }

  login(data:any){
    console.log(data);
    this.userService.login(data);
  }
}
