import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDetallesComponent } from './heroe-detalles.component';

describe('HeroeDetallesComponent', () => {
  let component: HeroeDetallesComponent;
  let fixture: ComponentFixture<HeroeDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
