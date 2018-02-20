import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteRecetasComponent } from './restaurante-recetas.component';

describe('RestauranteRecetasComponent', () => {
  let component: RestauranteRecetasComponent;
  let fixture: ComponentFixture<RestauranteRecetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteRecetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
