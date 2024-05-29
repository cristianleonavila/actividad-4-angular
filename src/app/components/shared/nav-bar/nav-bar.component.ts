import { Component } from '@angular/core';
import { MoviesService } from '../../movies/movies.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: `
    .active-link-rounded {
      border-radius: 7px;
    }
  `
})
export class NavBarComponent {


  constructor(private _moviesServ: MoviesService) {}

  searchMovie(query:string) {
    this._moviesServ.searchMovie( query );
  }
}
