import { Component, Input } from '@angular/core';
import { Heroe } from '../interfaces/heore.interface';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html'
})
export class CardHeroeComponent {

  @Input() heroe: Heroe = {} as Heroe;

}
