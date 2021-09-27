import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  private users: User[];

  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    })
  }

}
