import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PostService} from './../post.service';
import {FilmComponent} from './../film/film.component';

@Component({
  selector: 'post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit{
  post: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ){}
  ngOnInit(): void{
    this.getPostData();
  }
  getPostData(): void{
    const id = this.route.snapshot.paramMap.get('id');    
    this.postService.getPost(id)
      .subscribe(res => (this.post = res));      
  }
}