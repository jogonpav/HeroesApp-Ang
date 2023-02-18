import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/heore.interface';

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

  @Input() hero: Hero = {} as Hero;

}
