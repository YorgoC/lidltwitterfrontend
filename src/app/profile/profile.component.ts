import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../_services/user.service';
import { User } from '../models/user.model';
import { CheckUser } from '../DTOs/CheckUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;
  errorMessage = '';

  constructor(public auth: AuthService, private userService: UserService) { 
    this.auth.user$.subscribe((user) => {this.getUserData(user?.sub);});
  }

  ngOnInit(): void {
  }

  getUserData(authToken: string | undefined){
    if(authToken != undefined){
      let checkUser: CheckUser = new CheckUser(authToken);
      this.userService.getUser(checkUser).subscribe(
        data=>{
          this.user = data;
        },
        err =>{
            this.errorMessage = err.error.message;  
        }
      )
    }
  }


}
