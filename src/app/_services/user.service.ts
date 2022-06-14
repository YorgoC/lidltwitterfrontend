import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CheckUser} from '../DTOs/CheckUser'
import { User } from '../models/user.model';
import { CreateUser } from '../DTOs/CreateUser';



const API_URL = 'http://localhost:5021/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(createUserDto: CreateUser): Observable<any>{
    return this.http.post(API_URL, {...createUserDto});
  }

  checkUser(checkUserDto: CheckUser): Observable<any>{
    return this.http.post<boolean>(API_URL + '/auth0', {...checkUserDto});
  }

  getExternalId(checkUserDto: CheckUser): Observable<number>{
    return this.http.post<number>(API_URL + "/externalid", {...checkUserDto});
  }
  getUser(checkUserDto: CheckUser): Observable<User>{
    console.log("test")
    return this.http.post<User>(API_URL +"/getuser", {...checkUserDto});
  }
}
