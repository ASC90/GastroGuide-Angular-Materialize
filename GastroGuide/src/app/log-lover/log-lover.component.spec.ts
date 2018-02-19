import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLoverComponent } from './log-lover.component';

describe('LogLoverComponent', () => {
  let component: LogLoverComponent;
  let fixture: ComponentFixture<LogLoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogLoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
