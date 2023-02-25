import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Auth } from '../Interfaces/auth.interface';
import { Observable, tap } from 'rxjs';

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

  login(): Observable<Auth>{
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                tap( auth => this._auth = auth)
              );
  }

  logout(){ 
    this._auth = undefined;
  }
}
