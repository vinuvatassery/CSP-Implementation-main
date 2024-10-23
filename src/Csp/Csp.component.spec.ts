/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CspComponent } from './Csp.component';

describe('CspComponent', () => {
  let component: CspComponent;
  let fixture: ComponentFixture<CspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
