import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAlarm } from './timer-alarm';

describe('TimerAlarm', () => {
  let component: TimerAlarm;
  let fixture: ComponentFixture<TimerAlarm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerAlarm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerAlarm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
