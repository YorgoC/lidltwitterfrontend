import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const API_URL = 'http://localhost:6969/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(){
    
  }

  checkUser(authToken: string): boolean{
      if(authToken){
        return true;
      }
      return false;
  }

}
