import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesLegalesComponent } from './condiciones-legales.component';

describe('CondicionesLegalesComponent', () => {
  let component: CondicionesLegalesComponent;
  let fixture: ComponentFixture<CondicionesLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionesLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
