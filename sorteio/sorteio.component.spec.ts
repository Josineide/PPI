/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SorteioComponent } from './sorteio.component';

describe('SorteioComponent', () => {
  let component: SorteioComponent;
  let fixture: ComponentFixture<SorteioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
