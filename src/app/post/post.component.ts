import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    @Input() post: any;

  constructor() {

  }
}