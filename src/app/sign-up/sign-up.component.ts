import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../_services/user.service';
import { CreateUser } from '../DTOs/CreateUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  profilePicture: any;
  auth0Token: any;

  form: any = {
    username: null,
    mentionName: null,
    bio: null,

  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(public auth: AuthService, private userService: UserService, private router: Router) {
    this.auth.user$.subscribe((user) => {
      this.profilePicture = user?.picture;
      this.auth0Token = user?.sub;
    } ) ;
   
  }


  ngOnInit(): void {
  }


  onSubmit(): void {
    const { username, mentionName, bio} = this.form;
    console.log(this.profilePicture);
    this.userService.registerUser(new CreateUser(this.auth0Token,username,mentionName,bio,this.profilePicture)).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["timeline"])
      },
      err => {
        console.log(err);
      }
    );
  }


}
