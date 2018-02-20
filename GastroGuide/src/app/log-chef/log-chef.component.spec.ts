import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogChefComponent } from './log-chef.component';

describe('LogChefComponent', () => {
  let component: LogChefComponent;
  let fixture: ComponentFixture<LogChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
