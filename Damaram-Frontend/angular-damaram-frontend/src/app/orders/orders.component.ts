import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private order: Order;
  constructor() {
    this.order = new Order();
   }

  ngOnInit() {
    if(!localStorage.getItem('token')){  
      // this.router.navigate(['/login']);
      }else{
      let getOrderObj=JSON.parse(localStorage.getItem('tokenOrder'));
      console.log(getOrderObj);
      }
  }

}
