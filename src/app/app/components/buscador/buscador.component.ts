import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  name:string;

  constructor(private acroute:ActivatedRoute, private heroesService:HeroesService, private route:Router) { }

  ngOnInit() {
    this.acroute.params.subscribe(params =>{
      this.name = params['name'];
      this.heroes = this.heroesService.findHeroe(params['name'] );
      console.log(this.heroes);
      
    })
  }

  verHeroe(i:number){
    console.log(i);
    this.route.navigate(['/heroe', i]);
  }

}
