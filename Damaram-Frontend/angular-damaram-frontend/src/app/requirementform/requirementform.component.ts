import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'app-requirementform',
  templateUrl: './requirementform.component.html',
  styleUrls: ['./requirementform.component.css']
})
export class RequirementformComponent implements OnInit {

  private product: Product;
  private user: User;

  constructor(private service: MainService, private router: Router) {
    this.user = new User();
    this.product = new Product();
   }

  ngOnInit() {
  }

  public addProduct(): void {
    this.service.addProduct(this.product).subscribe(data => {
      this.product = new Product();
      alert('SERVICE CONFIRMED :-)');
      localStorage.setItem('tokenProduct',JSON.stringify(data));
      this.router.navigate(['/placeorder']);
    })
  }
}
