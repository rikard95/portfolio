import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerComponent } from './color-picker';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';
import { provideRouter } from '@angular/router';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerComponent, Klocka, Projekt],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of tailwind colors', () => {
    expect(component.tailwindColors).toBeDefined();
    expect(component.tailwindColors.length).toBeGreaterThan(0);
  });

  it('should have tailwind colors with name and shades', () => {
    const colorScale = component.tailwindColors[0];
    expect(colorScale.name).toBeDefined();
    expect(colorScale.shades).toBeDefined();
    expect(colorScale.shades.length).toBeGreaterThan(0);
    expect(colorScale.shades[0].hex).toMatch(/^#[0-9A-F]{6}$/i);
  });

  it('should initialize with a default custom hex color', () => {
    expect(component.customHex).toBe('#000000');
    expect(component.copiedColor).toBe('');
    expect(component.showCopiedMessage).toBe(false);
  });

  it('should copy color hex to clipboard', async () => {
    const mockClipboard = {
      writeText: jasmine.createSpy('writeText').and.returnValue(Promise.resolve())
    };
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      configurable: true
    });

    await component.copyColorHex('#FF0000');

    expect(mockClipboard.writeText).toHaveBeenCalledWith('#FF0000');
    expect(component.copiedColor).toBe('#FF0000');
    expect(component.showCopiedMessage).toBe(true);
  });

  it('should hide copied message after timeout', (done) => {
    const mockClipboard = {
      writeText: jasmine.createSpy('writeText').and.returnValue(Promise.resolve())
    };
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      configurable: true
    });
    
    component.copyColorHex('#0000FF').then(() => {
      expect(component.showCopiedMessage).toBe(true);
      
      setTimeout(() => {
        expect(component.showCopiedMessage).toBe(false);
        done();
      }, 2100);
    });
  });

  it('should validate hex colors correctly', () => {
    expect(component.isValidHex('#FF0000')).toBe(true);
    expect(component.isValidHex('#000000')).toBe(true);
    expect(component.isValidHex('#FFFFFF')).toBe(true);
    expect(component.isValidHex('#abc123')).toBe(true);
    expect(component.isValidHex('FF0000')).toBe(false);
    expect(component.isValidHex('#FF00')).toBe(false);
    expect(component.isValidHex('#GGGGGG')).toBe(false);
    expect(component.isValidHex('')).toBe(false);
  });

  it('should copy tailwind class name', async () => {
    const mockClipboard = {
      writeText: jasmine.createSpy('writeText').and.returnValue(Promise.resolve())
    };
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      configurable: true
    });

    await component.copyTailwindClass('Emerald', '200');

    expect(mockClipboard.writeText).toHaveBeenCalledWith('emerald-200');
    expect(component.copiedColor).toBe('emerald-200');
    expect(component.showCopiedMessage).toBe(true);
  });

  it('should switch tabs', () => {
    expect(component.activeTab).toBe('hex');
    component.switchTab('tailwind');
    expect(component.activeTab).toBe('tailwind');
    component.switchTab('hex');
    expect(component.activeTab).toBe('hex');
  });
});
