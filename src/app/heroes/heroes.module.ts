import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchingComponent } from './pages/searching/searching.component';
import { HeoreComponent } from './pages/heore/heore.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { CardHeroeComponent } from './card-heroe/card-heroe.component';
import { ImagePipe } from './pipes/image.pipes';


@NgModule({
  declarations: [
    AddComponent,
    SearchingComponent,
    CardHeroeComponent,
    HeoreComponent,
    HomeComponent,
    ImagePipe,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule

  ]
})
export class HeroesModule { }
