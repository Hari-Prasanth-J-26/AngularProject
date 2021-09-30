import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css']
})
export class SearchNameComponent implements OnInit {

  private user: User[];
  private name: string;

  constructor(private service: MainService, private router: Router) { }

  ngOnInit() {
  }

  public getUserByName(name: string): void {
    this.service.getUserByName(name).subscribe(res => {
      this.user = res;
      this.router.navigate(['/viewusersname']);
    })
  }
}
