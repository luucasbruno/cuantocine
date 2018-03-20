import { Component } from '@angular/core';
import { MainFeedComponent } from './main-feed/main.component';
import { HeaderComponent } from './header/header.component'
import { FilterComponent } from './filter/filter.component'
import { PopularFeedComponent } from './popular-feed/popular-feed.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {

  }
}