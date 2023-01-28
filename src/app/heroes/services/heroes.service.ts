import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heore.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Heroe[]>{
    console.log(environment)
    console.log(`${this.baseUrl}/heroes`);
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${ id }`)
  }

}
