/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditFrameComponent } from './edit-frame.component';

describe('EditFrameComponent', () => {
  let component: EditFrameComponent;
  let fixture: ComponentFixture<EditFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
