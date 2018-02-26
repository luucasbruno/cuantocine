import { Component } from '@angular/core';
import { MainFeedComponent } from './main-feed/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Define a users property to hold our user data
  

  // Create an instance of the DataService through dependency injection
  constructor() {

    // Access the Data Service's getUsers() method we defined
    /*this._dataService.getFilms()
        .subscribe(res => this.films = res);*/
  }
}