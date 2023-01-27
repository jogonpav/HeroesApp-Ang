import { Component, Input } from '@angular/core';
import { Heroe } from '../interfaces/heore.interface';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styles: [` 
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class CardHeroeComponent {

  @Input() heroe: Heroe = {} as Heroe;

}
