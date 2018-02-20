import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantePromocionesComponent } from './restaurante-promociones.component';

describe('RestaurantePromocionesComponent', () => {
  let component: RestaurantePromocionesComponent;
  let fixture: ComponentFixture<RestaurantePromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantePromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantePromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
