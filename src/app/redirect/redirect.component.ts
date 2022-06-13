import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../_services/user.service';
import { CheckUser } from '../DTOs/CheckUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  errorMessage = '';

  constructor(public auth: AuthService, private userService: UserService, private router: Router) { 
    
    this.auth.user$.subscribe((user) => {this.checkUser(user?.sub);
    } ) ;
  }

  ngOnInit(): void {

  }

  checkUser(authToken: string | undefined){
    if(authToken != undefined){
      let checkUser: CheckUser = new CheckUser(authToken);
      let userLoggedIn: boolean;
      this.userService.checkUser(checkUser).subscribe(
        (data) =>{
          userLoggedIn = data;
          console.log(userLoggedIn);
          if(userLoggedIn){
            console.log("already added bruh");
            this.router.navigate(["timeline"])
          }
          else{
            console.log("not added yet bruh")
            this.router.navigate(["signup"])
            
          }
        },
            (err) => {
              this.errorMessage = err.error.message;
            }
      )
     
    }
  }

}
