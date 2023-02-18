import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heore.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searching',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  term: string = '';
  heros: Hero[] = [];

  heroSelected: Hero | undefined;

  constructor (
    private heroesService: HeroesService
  ){}

  searching (){
    this.heroesService.getSuggest(this.term.trim())
      .subscribe ( heros => this.heros = heros);
  }

  optionSelected(event: MatAutocompleteSelectedEvent ){
    if (event.option.value){
      const hero: Hero = event.option.value;
      this.term = hero.superhero;
      this.heroesService.getHeroePorId(hero.id!)
        .subscribe( resp => this.heroSelected = resp);
    }else {
      this.heroSelected = undefined;
    }
  }
}
