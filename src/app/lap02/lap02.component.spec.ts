import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap02Component } from './lap02.component';

describe('Lap02Component', () => {
  let component: Lap02Component;
  let fixture: ComponentFixture<Lap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
