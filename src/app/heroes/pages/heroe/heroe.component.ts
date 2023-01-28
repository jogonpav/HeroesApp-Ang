import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heore.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heore',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ){}

  heroe!: Heroe; //heroe: Heroe = {} as Heroe; 

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( (param) => this.heroeService.getHeroePorId(param['id']) ),
    )
    .subscribe( respHeroe => {
      this.heroe = respHeroe;
    })
  }

  return (){
    this.router.navigate(['/heroes/list'])
  }
}
