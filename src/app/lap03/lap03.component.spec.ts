import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap03Component } from './lap03.component';

describe('Lap03Component', () => {
  let component: Lap03Component;
  let fixture: ComponentFixture<Lap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
