import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heore.interface';

@Component({
  selector: 'app-heore',
  templateUrl: './heore.component.html'
})

export class HeoreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => console.log(params['id']))
  }

  


}
