import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Order } from '../order';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'app-placeorderform',
  templateUrl: './placeorderform.component.html',
  styleUrls: ['./placeorderform.component.css']
})
export class PlaceorderformComponent implements OnInit {

  private product: Product;
  private user: User;
  private order: Order;

  constructor(private router: Router, private service: MainService) {
    this.order = new Order();
    this.user = new User();
    this.product = new Product();
   }

  ngOnInit() {
    if(!localStorage.getItem('token')){  
      // this.router.navigate(['/login']);
      }else{
      let getProductObj=JSON.parse(localStorage.getItem('tokenProduct'));
      this.product.productId=getProductObj.productId;
      this.product.productName=getProductObj.productName;
      this.product=getProductObj;
      console.log(getProductObj);
      let getUser=JSON.parse(localStorage.getItem('token'));
      this.user.id=getUser.id;
      this.user=getUser;
      console.log(getUser);
      }
  }

  public placeOrder(): void {
    this.service.placeOrder(this.order).subscribe(res => {
      console.log(res);
      // this.order.productId=this.product.productId;
      // console.log(this.order);
      // this.order.userId=this.user.id;
      // console.log(this.order);
      alert('ORDER PLACED :-)');
      // var orders = {
      //   orderId: 1,
      //   orderStatus: 'placed',
      //   user:this.user,
      //   product:this.product
      // };
      localStorage.setItem('tokenOrder',JSON.stringify(res));
      // this.router.navigate(['/orders']);
    })
  }

}
