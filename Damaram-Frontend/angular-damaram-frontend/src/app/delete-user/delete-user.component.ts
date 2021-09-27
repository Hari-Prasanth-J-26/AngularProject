import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  private id: number;

  constructor(private service: MainService, private router: Router) { }

  ngOnInit() {
    
  }

  // public deleteUser() {
  //   this.service.deleteUser(this.id).subscribe(res => {
  //     this.id = null;
  //     this.router.navigate(["/viewusers"]);
  //   });

  public deleteUSer(){
    this.service.deleteUser(this.id);
    this.router.navigate(["/viewusers"]);
  }
  
}
