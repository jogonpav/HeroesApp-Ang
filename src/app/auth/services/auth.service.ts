import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Auth } from '../Interfaces/auth.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined; // Like this property is privated, is better to call a getter method

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor( private http: HttpClient) { }

  authVerify():Observable<boolean>{
    console.log(localStorage.getItem('token'))
    if(!localStorage.getItem('token')){
       return of(false);
    }
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
            .pipe( 
              map(auth => {
                this._auth = auth;
                return true;
              })
            )
  }

  login(): Observable<Auth>{
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                tap( auth => this._auth = auth),
                tap(auth => localStorage.setItem('token', auth.id))
              );
  }

  logout(){ 
    this._auth = undefined;
    localStorage.removeItem('token');

  }
}
