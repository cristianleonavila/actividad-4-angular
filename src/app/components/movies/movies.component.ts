import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  constructor(
    private _moviesServ: MoviesService
  ) {

  }

  ngOnInit(): void {
    this._moviesServ.getMovies();
  }

  get movies(): Movie[] {
    return this._moviesServ.movies;
  }

}
