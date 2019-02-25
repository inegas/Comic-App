import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  heroe:any = {};

  constructor(private acroute:ActivatedRoute, private heroeService:HeroesService) {

      this.acroute.params.subscribe(params =>{
        this.heroe = this.heroeService.getHeroe(params['id']);
        // console.log(params['id']);
        
      });
   }

}
