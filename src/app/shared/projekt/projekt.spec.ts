import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projekt } from './projekt';

describe('Projekt', () => {
  let component: Projekt;
  let fixture: ComponentFixture<Projekt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projekt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projekt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
