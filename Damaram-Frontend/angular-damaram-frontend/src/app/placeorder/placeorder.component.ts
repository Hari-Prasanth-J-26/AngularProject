import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Order } from '../order';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  private order: Order;
  private user: User;
  private product: Product;
  getUser: any;
  getProductObj: any;

  constructor(private service: MainService, private router: Router) {
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

      // var tokenOrder = {
      //   orderStatus: 'placed',
      //   userId:this.user.id,
      //   productId:this.product.productId
      // };

      // console.log(tokenOrder);
  }

 

  public placeOrder(): void {
    this.service.placeOrder(this.order).subscribe(data => {
      console.log(data);
      this.order = data;
      //console.log(this.order);
      // this.order.productId=this.product.productId;
      // console.log(this.order);
      // this.order.userId=this.user.id;
      // console.log(this.order);
      alert('ORDER PLACED :-)');
      // var orders = {
      //   orderId: 1,
      //   orderStatus: 'placed',
      //   userId:this.user.id,
      //   productId:this.product.productId
      // };
      localStorage.setItem('tokenOrder',JSON.stringify(this.order));
      console.log('tokenOrder');
      this.router.navigate(['/orders']);
    })
  }
}
