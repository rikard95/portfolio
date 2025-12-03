import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dagbok } from './dagbok';

describe('Dagbok', () => {
  let component: Dagbok;
  let fixture: ComponentFixture<Dagbok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dagbok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dagbok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
