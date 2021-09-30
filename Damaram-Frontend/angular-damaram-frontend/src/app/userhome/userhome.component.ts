import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router: Router) { }

  private user= new User();

	ngOnInit() {
	  if(!localStorage.getItem('token')){  
		// this.router.navigate(['/login']);
	  }else{
		let getUserObj=JSON.parse(localStorage.getItem('token'));  
		this.user.id=getUserObj.id;
		this.user.name=getUserObj.name;
		this.user.email=getUserObj.email;
		this.user.contact=getUserObj.contact;
		console.log(getUserObj.id);
		console.log(getUserObj.name);
	  }
	}

  

}
