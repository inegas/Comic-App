import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-detalles',
  templateUrl: './heroe-detalles.component.html',
  styles: []
})
export class HeroeDetallesComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  constructor() { }

  ngOnInit() {
  }

  verHeroe(){
    console.log(this.index);
    
  }

}
