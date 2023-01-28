import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heore.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searching',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  term: string = '';
  heroes: Heroe[] = [];

  constructor (
    private heroesService: HeroesService
  ){}

  searching (){
    this.heroesService.getHeroes()
      .subscribe ( heroes => this.heroes = heroes);
  }

}
