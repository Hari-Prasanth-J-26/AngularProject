import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: User;

  constructor(private service: MainService, private router: Router) {
    this.user = new User();
  }


  public registerUser(): void {
    this.service.registerUser(this.user).subscribe(res => {
      this.user = new User();
    })
  }

  public loginUser(): void {
    this.service.loginUser(this.user).subscribe(res => {
      this.user = new User();
      this.router.navigate(['/userhome']);
    })
  }
}
