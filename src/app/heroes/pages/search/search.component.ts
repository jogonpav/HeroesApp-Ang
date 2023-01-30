import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  heoreSelected: Heroe | undefined;

  constructor (
    private heroesService: HeroesService
  ){}

  searching (){
    this.heroesService.getSuggest(this.term.trim())
      .subscribe ( heroes => this.heroes = heroes);
  }

  optionSelected(event: MatAutocompleteSelectedEvent ){
    if (event.option.value){
      const heroe: Heroe = event.option.value;
      this.term = heroe.superhero;
      this.heroesService.getHeroePorId(heroe.id!)
        .subscribe( resp => this.heoreSelected = resp);
    }else {
      this.heoreSelected = undefined;
    }
  }
}
