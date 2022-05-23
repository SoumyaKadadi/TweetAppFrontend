import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TweetRequest } from '../model/tweet-request';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  user!: string
  delete!:string

  constructor(private http: HttpClient) { }

  getAllTweets() {
    return this.http.get("http://localhost:8080/api/v1.0/tweets/all");
  }
  postTweet(TweetRequest: TweetRequest) {
    this.user = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.http.post<any>("http://localhost:8080/api/v1.0/tweets/add/" + this.user, TweetRequest);
  }
  getUserTweet(){
    this.user = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.http.get("http://localhost:8080/api/v1.0/tweets/"+this.user);
  }
  deleteTweet(del:String){
    this.user = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.http.delete<any>("http://localhost:8080/api/v1.0/tweets/"+this.user+"/delete/"+del);
  }

}
