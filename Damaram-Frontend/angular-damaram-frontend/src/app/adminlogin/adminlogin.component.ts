import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { MainService } from '../main.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  private admin: Admin;
  submitted = false;

  loginForm = new FormGroup({
    adminEmail: new FormControl(),
    adminPassword: new FormControl(),
  });

  constructor(private service: MainService, private router: Router, private formBuilder: FormBuilder) {
    this.admin = new Admin();
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      adminEmail: ['', [Validators.required, Validators.email]],
      adminPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  get l() { return this.loginForm.controls; }

  onSubmitLogin() {
    this.submitted = true;
      if (this.loginForm.invalid) {
        return;
    }
    this.adminlogin();
  }

  public adminlogin(): void {
    this.service.adminlogin(this.admin).subscribe(data => {
      this.admin = new Admin();
      alert('ADMIN LOGIN SUCCESSFULL :-)');
      localStorage.setItem('token',JSON.stringify(data));
      this.router.navigate(['/adminhome']);
    }) 
  }
}
