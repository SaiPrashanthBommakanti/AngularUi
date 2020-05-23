import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDogsComponent } from './display-dogs.component';

describe('DisplayDogsComponent', () => {
  let component: DisplayDogsComponent;
  let fixture: ComponentFixture<DisplayDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
