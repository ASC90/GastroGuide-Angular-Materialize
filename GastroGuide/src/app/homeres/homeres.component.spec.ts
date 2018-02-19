import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeresComponent } from './homeres.component';

describe('HomeresComponent', () => {
  let component: HomeresComponent;
  let fixture: ComponentFixture<HomeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
