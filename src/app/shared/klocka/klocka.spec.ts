import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Klocka } from './klocka';

describe('Klocka', () => {
  let component: Klocka;
  let fixture: ComponentFixture<Klocka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Klocka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Klocka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
