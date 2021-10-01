import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Admin } from './admin';
import { Order } from './order';
import { Product } from './product';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url: string;

  

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/";
  }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.url+"registeruser", user);
  }

  public loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.url+"login", user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url, user);
  }
  // public deleteUser(id: number): void {
  //   this.http.delete(this.url + "user/{id}");
  // }

  public deleteUser(id: number): any {
    // return this.http.delete(this.url + "user/{id}");
     return this.http.delete("http://localhost:8080/user/"+id);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + "users");
  }

  public adminlogin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.url+"adminlogin", admin);
  } 
  
  public addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url+"addproduct", product);
  }
 
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>("http://localhost:8080/user/"+id);
  }

  public getUserByName(name: string): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/users/name/"+name);
  }

  public getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/users/email/"+email);
  }

  public getUserByContact(contact: string): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/users/contact/"+contact);
  }

  public placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>("http://localhost:8080/user/placeorder", order);
  }

}
