import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hem } from './hem';

describe('Hem', () => {
  let component: Hem;
  let fixture: ComponentFixture<Hem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
