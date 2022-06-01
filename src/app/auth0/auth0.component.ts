import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.scss']
})
export class Auth0Component implements OnInit {




  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document, private userService: UserService) {

    this.auth.user$.subscribe((user) => {this.checkUser(user?.sub);
    } ) 
  }

  ngOnInit(): void {
  }

  checkUser(authToken: string | undefined): any{

    if(authToken != undefined){
      this.userService.checkUser(authToken);
    }
    
  }

}
