import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../services/omdb-api.service';
import { IOMDBResponse } from '../omdbresponse';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies : IOMDBResponse[];
  movieData : IOMDBResponse;
  posterHeight: number = 200;
  errorMessage: string;

  constructor(private _movieService: OmdbApiService) {
    this.movies = new Array();
   }

  ngOnInit() {
  }

  getMovieDetails(movieName: string) {
    this._movieService.getMovieData(movieName).subscribe(response => {
      this.movieData = response;
    }, error => this.errorMessage = <any>error);
    
  }

addToFavourites() {
  this.movies.push(this.movieData);
}
cancel() {
  this.movieData = null;
}

removeFromFavourites($event: IOMDBResponse) {
  this.movies.splice(this.movies.indexOf($event));
}
}
