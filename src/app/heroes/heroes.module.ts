import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddingComponent } from './pages/adding/adding.component';
import { SearchingComponent } from './pages/searching/searching.component';
import { HeoreComponent } from './pages/heore/heore.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AddingComponent,
    SearchingComponent,
    HeoreComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule

  ]
})
export class HeroesModule { }
