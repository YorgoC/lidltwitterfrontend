import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TweetService } from '../_services/tweet.service';
import { UserService } from '../_services/user.service';
import { CheckUser } from '../DTOs/CheckUser';
import { CreateTweet } from '../DTOs/CreateTweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  now: number = Date.now();
  externalId: number | undefined;
  auth0Id: string | undefined;
  errorMessage = '';

  form: any = {
    text: null,
  };

  constructor(public auth: AuthService, public tweetService: TweetService, public userService: UserService) { 
    this.auth.user$.subscribe((user) => {this.auth0Id = user?.sub;
    } ) ;

    this.now = Date.now();

    if(this.auth0Id != undefined){
      userService.getExternalId(new CheckUser(this.auth0Id)).subscribe(
        data =>{
          this.externalId = data;
        },
        err =>{
          this.errorMessage = err.error.message;
        }
      )
    }
  }

  ngOnInit(): void {
    
  }

  createTweet(): void{
    if(this.externalId != undefined){
      const { text } = this.form;
      this.tweetService.createTweet(new CreateTweet(this.externalId, text)).subscribe(
        data =>{
          
        },
        (err) => { this.errorMessage = err.error.message;

        }
      )
    }
  }

}
