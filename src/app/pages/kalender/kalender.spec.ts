import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Kalender } from './kalender';

describe('Kalender', () => {
  let component: Kalender;
  let fixture: ComponentFixture<Kalender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kalender],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kalender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
