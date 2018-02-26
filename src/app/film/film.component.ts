import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from './../film.service';


@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit{
    @Input() film: any;
    @Input() desc: any;
  // Define a users property to hold our user data
  // Create an instance of the DataService through dependency injection
  constructor(private filmService: FilmService) {
  }
  ngOnInit():void{
      this.getFilmData();
  }
  getFilmData():void{
      this.filmService.getFilm(this.film.id)
      .subscribe(res => this.film = res);  
  }
}