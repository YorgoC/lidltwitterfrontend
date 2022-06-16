import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTweet } from '../DTOs/CreateTweet';
import { ReadTweet } from '../DTOs/ReadTweet';


const API_URL = 'http://localhost:5021/tweets';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }


  createTweet(createTweet: CreateTweet): Observable<any>{
    console.log("--> creating tweet");
    return this.http.post(API_URL + "/tweet", {...createTweet});
  }

  getTweets(auth0Id: string): Observable<ReadTweet[]>{
    console.log("--> getting tweets for " + auth0Id)
    return this.http.get<ReadTweet[]>(API_URL + "/gettweets/" + auth0Id);
  }
}
