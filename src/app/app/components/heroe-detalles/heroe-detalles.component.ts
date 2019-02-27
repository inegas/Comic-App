import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-detalles',
  templateUrl: './heroe-detalles.component.html',
  styles: []
})
export class HeroeDetallesComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;
  @Output() heroefinded: EventEmitter<number>;

  constructor(private route:Router) {
    this.heroefinded = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    // console.log(this.index);
    // this.route.navigate(['/heroe', this.index]);
    this.heroefinded.emit(this.index);
  }

}
