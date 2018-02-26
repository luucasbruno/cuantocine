import { Component, OnInit } from '@angular/core';
import {PostComponent} from '../post/post.component'
import { PostsListService } from '../posts-list.service';


@Component({
  selector: 'main-feed',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainFeedComponent{
  
  // Define a users property to hold our user data
  posts: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _PostsListService: PostsListService) {

    // Access the Data Service's getFilms() method we defined
    this._PostsListService.getPosts()
        .subscribe(res => this.posts = res);
  }
}