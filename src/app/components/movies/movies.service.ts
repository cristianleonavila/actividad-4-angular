import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { MoviesResponse } from './movie-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: Movie[] = [];

  private enpoint: string = 'https://api.themoviedb.org/3/';

  private imgUrl: string = 'http://image.tmdb.org/t/p/';

  private auth: string = "dfcef83d2c2d8482bcf7e94a5668acb1";

  private defaultHeaders: any = {
    accept: 'application/json',
    Authorization: `Bearer ${this.auth}`
}

  constructor( private http: HttpClient) { }

  getMovies( ) {
    this.http.get<MoviesResponse>(`${this.enpoint}trending/movie/day?region=CO&language=es-CO&api_key=${this.auth}`)
      .subscribe( res => {
        this.movies = res.results.map( obj => this._mapResponse(obj));
      });
  }

  private _mapResponse( obj: Movie ) {
    return {
      overview: obj.overview,
      img_url: `${this.imgUrl}w300${obj?.poster_path}`,
      id: obj.id,
      poster_path: obj.poster_path,
      title: obj.title
    }
  }

  searchMovie(query:string) {
    if ( !query.length ) return;
    this.http.get<MoviesResponse>(`${this.enpoint}search/movie?query=${query}&region=CO&language=es-CO&api_key=${this.auth}`)
      .subscribe( res => {
        this.movies = res.results.map( obj => this._mapResponse(obj));
      });
  }

}
