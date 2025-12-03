import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmMig } from './om-mig';

describe('OmMig', () => {
  let component: OmMig;
  let fixture: ComponentFixture<OmMig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmMig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmMig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
