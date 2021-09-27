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
    this.url = "http://localhost:7000/";
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
  public deleteUser(id: number): void {
    this.http.delete(this.url + "/{id}");
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + "s");
  }
 
}
