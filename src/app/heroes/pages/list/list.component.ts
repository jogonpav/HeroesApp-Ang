import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import {Hero } from '../../interfaces/heore.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{

  constructor (private heroeService: HeroesService){}

  Heros: Hero [] = [];

  ngOnInit() {
    this.heroeService.getHeroes()
      .subscribe( resp => {
        this.Heros = resp;
        console.log(this.Heros)
      });
  }



}
