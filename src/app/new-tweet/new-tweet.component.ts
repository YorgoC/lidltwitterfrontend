import { Component, OnInit } from '@angular/core';
import { TweetService } from '../_services/tweet.service';
import { AuthService } from '@auth0/auth0-angular';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { CreateTweet } from '../DTOs/CreateTweet';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent implements OnInit {

  constructor(private tweetService: TweetService, private auth: AuthService, public dialogRef: MatDialogRef<NewTweetComponent>,
              private builder: FormBuilder) 
              { this.auth.user$.subscribe((user) => {
                this.auth0Token = user?.sub;
              } ) ;}

  form:any ={
    tweet:null
  };


  auth0Token: any;

  ngOnInit(): void {
  }

  onSubmit(){
    const {tweet} = this.form;

    if(this.auth0Token != null){
      this.tweetService.createTweet(new CreateTweet(this.auth0Token, tweet)).subscribe(
        data => {
          console.log(data);
        },
        err =>{
          console.log(err);
        }
      );
  
      this.onClose();
    }
    
  }


  onClose(){
    this.dialogRef.close();
  }
}
