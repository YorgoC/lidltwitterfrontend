import { Component, OnInit } from '@angular/core';
import { TweetService } from '../_services/tweet.service';
import { AuthService } from '@auth0/auth0-angular';
import { TweetsSection } from '../models/tweets-section.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewTweetComponent } from '../new-tweet/new-tweet.component';

@Component({
  selector: 'app-tweets-section',
  templateUrl: './tweets-section.component.html',
  styleUrls: ['./tweets-section.component.scss']
})
export class TweetsSectionComponent implements OnInit {

  auth0Token: any;
  tweetSection: TweetsSection = new TweetsSection([]);

  constructor(private tweetService: TweetService, public auth: AuthService, private dialog: MatDialog) { 
    this.auth.user$.subscribe((user) => {
      this.auth0Token = user?.sub;
    } ) ;
  }

  ngOnInit(): void {
    this.getTweets();
  }

  private getTweets(){
    this.tweetService.getTweets(this.auth0Token).subscribe(
        (data) =>{
          this.tweetSection.tweets = data;
        },
        (error) => {
          console.log(error);
        }
    )
  }

  public onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(NewTweetComponent, dialogConfig);
  }

}
