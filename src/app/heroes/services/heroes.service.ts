import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heore.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  _limit: number = 6;
  
  constructor(private http: HttpClient) { }



  private baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Hero[]>{
    console.log(environment)
    console.log(`${this.baseUrl}/heroes`);
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId(id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${ id }`)
  }

  getSuggest(term: string): Observable<Hero[]> {

    const params = new HttpParams()
    .set('q', term)
    .set('_limit', this._limit);

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`, {params: params});
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<object> {
    return this.http.delete<object>(`${this.baseUrl}/heroes/${id}`);
  }

}
