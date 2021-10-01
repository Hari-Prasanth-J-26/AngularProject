import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertifyService } from '../alertify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  registerForm: FormGroup;
  submitted = false;

  private user: User;
  // private userDetails: User;

  constructor(private service: MainService, private router: Router, private formBuilder: FormBuilder, private alertify:AlertifyService) {
    this.user = new User();
    // this.userDetails = new User();
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        contact: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmitRegister() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
    }
    this.registerUser();
    alert('REGISTRATION SUCCESSFULL :-)');
  }

  get l() { return this.loginForm.controls; }

  onSubmitLogin() {
    this.submitted = true;
      if (this.loginForm.invalid) {
        return;
    }
    this.loginUser();
    // alert('Processing :-)');
  }

  public registerUser(): void {
    this.service.registerUser(this.user).subscribe(res => {
      console.log(res);
      this.user = new User();
    })
  }

  public loginUser(): void {
    this.service.loginUser(this.user).subscribe(data => {
      this.user = new User();
      alert('LOGIN SUCCESSFULL :-)');
      localStorage.setItem('token',JSON.stringify(data));
      this.router.navigate(['/userhome']);
    }) 
    // data=>{
    //   localStorage.setItem('token',JSON.stringify(data));
    // })
  }


  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

    
}


