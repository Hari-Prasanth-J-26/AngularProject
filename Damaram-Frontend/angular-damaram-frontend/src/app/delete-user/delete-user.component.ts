import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  private id: number;
  private user: User;

  constructor(private service: MainService, private router: Router) {
    
   }

  ngOnInit() {
    
  }

  // public deleteUser() {
  //   this.service.deleteUser(this.id).subscribe(res => {
  //     this.id = null;
  //     this.router.navigate(["/viewusers"]);
  //   });

  // public deleteUSer(){
  //   this.service.deleteUser(this.id);
  //   this.router.navigate(["/viewusers"]);
  // }
  

  public deleteUser(id: number): void {
    this.service.deleteUser(id).subscribe(res => {
      this.user=res;
    this.router.navigate(['/viewusers']);
    })
  }
}
