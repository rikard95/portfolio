import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registrera } from './registrera';

describe('Registrera', () => {
  let component: Registrera;
  let fixture: ComponentFixture<Registrera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrera]
    }).compileComponents();

    fixture = TestBed.createComponent(Registrera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
