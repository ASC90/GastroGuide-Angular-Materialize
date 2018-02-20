import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteOpinionesComponent } from './restaurante-opiniones.component';

describe('RestauranteOpinionesComponent', () => {
  let component: RestauranteOpinionesComponent;
  let fixture: ComponentFixture<RestauranteOpinionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteOpinionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
