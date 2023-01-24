import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heore.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{

  constructor (private heroeService: HeroesService){}

  heroes: Heroe [] = [];

  ngOnInit() {
    this.heroeService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
        console.log(this.heroes)
      });
  }



}
