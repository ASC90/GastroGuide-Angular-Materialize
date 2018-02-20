import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteVideosComponent } from './restaurante-videos.component';

describe('RestauranteVideosComponent', () => {
  let component: RestauranteVideosComponent;
  let fixture: ComponentFixture<RestauranteVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
