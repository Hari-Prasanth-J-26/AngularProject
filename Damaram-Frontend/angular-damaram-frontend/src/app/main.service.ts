import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

 
}
