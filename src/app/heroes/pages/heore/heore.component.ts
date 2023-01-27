import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heore.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heore',
  templateUrl: './heore.component.html'
})

export class HeoreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ){}

  heroe: Heroe = {} as Heroe;

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( (param) => this.heroeService.getHeroePorId(param['id']) ),
    )
    .subscribe( respHeroe => {
      this.heroe = respHeroe;
    })

  }

  


}
