import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heore.interface';
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
    private router: Router,
    private location: Location
  ){}

  hero!: Hero; //heroe: Heroe = {} as Heroe; 

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( (param) => this.heroeService.getHeroePorId(param['id']) ),
    )
    .subscribe( respHeroe => {
      this.hero = respHeroe;
    })
  }

  return (){
    //this.router.navigate(['/heroes/list'])
    this.location.back();
  }
}
