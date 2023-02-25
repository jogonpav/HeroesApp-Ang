import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorComponent } from './shared/pages/error/error.component';


const routes: Routes = [
  {
   path: 'auth',
   loadChildren: () => import ('./auth/auth.module').then( module => module.AuthModule )
  },
  {
    path: 'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then( module => module.HeroesModule ),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
   },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
