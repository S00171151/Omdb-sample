import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOMDBResponse } from '../omdbresponse';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movieDetails: IOMDBResponse;
  @Output() removeMovie: EventEmitter<IOMDBResponse> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeFromFavourites(){
this.removeMovie.emit(this.movieDetails);
  }

   addReview(myReview: string) {
     this.movieDetails.MyReview = myReview;
   }

}