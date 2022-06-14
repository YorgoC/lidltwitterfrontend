import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { UserService } from '../_services/user.service';
import { CheckUser } from '../DTOs/CheckUser';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.scss']
})
export class Auth0Component implements OnInit {


  errorMessage = '';
  

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document, private userService: UserService) {
    this.auth.user$.subscribe((user) => {console.log(user?.sub);
    } ) ;
   
  }


  ngOnInit(): void {
  }

  login(): void{
    this.auth.loginWithRedirect(
      {appState: { target: '/redirect' }}
    );
  }



}
