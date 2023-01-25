import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchingComponent } from './pages/searching/searching.component';
import { HeoreComponent } from './pages/heore/heore.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
     {
      path: 'list',
      component: ListComponent
     },
     {
      path: 'add',
      component: AddComponent
     },
     {
      path: 'edit/:id',
      component: AddComponent
     },
    { path: 'search',
      component: SearchingComponent
    },
    {
      path: ':id',
      component: HeoreComponent
    },
    {
      path:'**',
      redirectTo: 'list'
    }

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
