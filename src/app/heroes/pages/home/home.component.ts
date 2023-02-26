import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/Interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/Interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px
    }
  `]
})
export class HomeComponent {

  get auth(){
    return this.authService.auth;
  }

  constructor( 
              private router: Router,
              private authService: AuthService
              ){}

 
  logout(){
    this.authService.logout();
    this.router.navigate(['./auth'])
  }

  get auth(){
    return this.authService.auth;
  }

  constructor( 
              private router: Router,
              private authService: AuthService
              ){}

 
  logout(){
    this.router.navigate(['./auth'])
  }

}
