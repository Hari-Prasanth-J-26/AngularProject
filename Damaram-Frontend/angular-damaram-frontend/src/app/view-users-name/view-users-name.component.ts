import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-view-users-name',
  templateUrl: './view-users-name.component.html',
  styleUrls: ['./view-users-name.component.css']
})
export class ViewUsersNameComponent implements OnInit {
  private users: User[];
  private name:string;

  constructor(private service: MainService) { }

  ngOnInit() {
    
  }
  public getUserByName(name: string): void {
    this.service.getUserByName(name).subscribe(res => {
      this.users = res;
    })
  }
}
