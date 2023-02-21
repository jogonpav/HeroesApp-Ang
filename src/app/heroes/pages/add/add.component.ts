import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heore.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  hero: Hero = {
    id: '',
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( 
              private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              private matDialog: MatDialog,
            ){}

  ngOnInit(): void {

    if (this.router.url.includes('edit')){
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroeService.getHeroePorId(id))
      )
      .subscribe( (hero) => this.hero = hero);
    }
  }
    
  save(){
    if(this.hero.superhero.trim().length === 0){
      return
    }
    
    if(this.hero.id){
      this.heroeService.updateHero(this.hero).subscribe( resp => {
        this.showSnackBar("Hero updated")
      } )
    }else {
      
      this.heroeService.addHero(this.hero).subscribe( hero => {
        this.router.navigate(['/heroes/edit', hero.id])
        this.showSnackBar("Hero created")
      })
    }

  }

  deleteHero(){

   const dialog = this.matDialog.open(ConfirmComponent, {
      width: '250px',
      data: {...this.hero}
    });

    dialog.afterClosed().pipe(
      filter(result => !!result),
      switchMap(() => this.heroeService.deleteHero(this.hero.id!))
    ).subscribe(() => {
      this.router.navigate(['/heroes']);
    });

    /* dialog.afterClosed()
    .subscribe(
      (result) => {
      if(result){
        this.heroeService.deleteHero(this.hero.id!).subscribe(
          resp => {
            this.router.navigate(['/heroes']);
          })
      }
    }) */
  }

  showSnackBar( message: string){
    this._snackBar.open(message, 'success!!',{
      duration: 2500
    });
  }

}
