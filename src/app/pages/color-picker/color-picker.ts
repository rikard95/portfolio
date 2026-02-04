import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';
import { RouterModule } from '@angular/router';

interface ColorItem {
  name: string;
  hex: string;
}

interface TailwindColorScale {
  name: string;
  shades: { shade: string; hex: string }[];
}

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, Klocka, Projekt, RouterModule],
  templateUrl: './color-picker.html',
  styleUrls: ['./color-picker.css']
})
export class ColorPickerComponent {
  copiedColor: string = '';
  showCopiedMessage: boolean = false;
  customHex: string = '#000000';

  tailwindColors: TailwindColorScale[] = [
    {
      name: 'Slate',
      shades: [
        { shade: '50', hex: '#f8fafc' },
        { shade: '100', hex: '#f1f5f9' },
        { shade: '200', hex: '#e2e8f0' },
        { shade: '300', hex: '#cbd5e1' },
        { shade: '400', hex: '#94a3b8' },
        { shade: '500', hex: '#64748b' },
        { shade: '600', hex: '#475569' },
        { shade: '700', hex: '#334155' },
        { shade: '800', hex: '#1e293b' },
        { shade: '900', hex: '#0f172a' },
        { shade: '950', hex: '#020617' }
      ]
    },
    {
      name: 'Gray',
      shades: [
        { shade: '50', hex: '#f9fafb' },
        { shade: '100', hex: '#f3f4f6' },
        { shade: '200', hex: '#e5e7eb' },
        { shade: '300', hex: '#d1d5db' },
        { shade: '400', hex: '#9ca3af' },
        { shade: '500', hex: '#6b7280' },
        { shade: '600', hex: '#4b5563' },
        { shade: '700', hex: '#374151' },
        { shade: '800', hex: '#1f2937' },
        { shade: '900', hex: '#111827' },
        { shade: '950', hex: '#030712' }
      ]
    },
    {
      name: 'Zinc',
      shades: [
        { shade: '50', hex: '#fafafa' },
        { shade: '100', hex: '#f4f4f5' },
        { shade: '200', hex: '#e4e4e7' },
        { shade: '300', hex: '#d4d4d8' },
        { shade: '400', hex: '#a1a1aa' },
        { shade: '500', hex: '#71717a' },
        { shade: '600', hex: '#52525b' },
        { shade: '700', hex: '#3f3f46' },
        { shade: '800', hex: '#27272a' },
        { shade: '900', hex: '#18181b' },
        { shade: '950', hex: '#09090b' }
      ]
    },
    {
      name: 'Red',
      shades: [
        { shade: '50', hex: '#fef2f2' },
        { shade: '100', hex: '#fee2e2' },
        { shade: '200', hex: '#fecaca' },
        { shade: '300', hex: '#fca5a5' },
        { shade: '400', hex: '#f87171' },
        { shade: '500', hex: '#ef4444' },
        { shade: '600', hex: '#dc2626' },
        { shade: '700', hex: '#b91c1c' },
        { shade: '800', hex: '#991b1b' },
        { shade: '900', hex: '#7f1d1d' },
        { shade: '950', hex: '#450a0a' }
      ]
    },
    {
      name: 'Orange',
      shades: [
        { shade: '50', hex: '#fff7ed' },
        { shade: '100', hex: '#ffedd5' },
        { shade: '200', hex: '#fed7aa' },
        { shade: '300', hex: '#fdba74' },
        { shade: '400', hex: '#fb923c' },
        { shade: '500', hex: '#f97316' },
        { shade: '600', hex: '#ea580c' },
        { shade: '700', hex: '#c2410c' },
        { shade: '800', hex: '#9a3412' },
        { shade: '900', hex: '#7c2d12' },
        { shade: '950', hex: '#431407' }
      ]
    },
    {
      name: 'Amber',
      shades: [
        { shade: '50', hex: '#fffbeb' },
        { shade: '100', hex: '#fef3c7' },
        { shade: '200', hex: '#fde68a' },
        { shade: '300', hex: '#fcd34d' },
        { shade: '400', hex: '#fbbf24' },
        { shade: '500', hex: '#f59e0b' },
        { shade: '600', hex: '#d97706' },
        { shade: '700', hex: '#b45309' },
        { shade: '800', hex: '#92400e' },
        { shade: '900', hex: '#78350f' },
        { shade: '950', hex: '#451a03' }
      ]
    },
    {
      name: 'Yellow',
      shades: [
        { shade: '50', hex: '#fefce8' },
        { shade: '100', hex: '#fef9c3' },
        { shade: '200', hex: '#fef08a' },
        { shade: '300', hex: '#fde047' },
        { shade: '400', hex: '#facc15' },
        { shade: '500', hex: '#eab308' },
        { shade: '600', hex: '#ca8a04' },
        { shade: '700', hex: '#a16207' },
        { shade: '800', hex: '#854d0e' },
        { shade: '900', hex: '#713f12' },
        { shade: '950', hex: '#422006' }
      ]
    },
    {
      name: 'Lime',
      shades: [
        { shade: '50', hex: '#f7fee7' },
        { shade: '100', hex: '#ecfccb' },
        { shade: '200', hex: '#d9f99d' },
        { shade: '300', hex: '#bef264' },
        { shade: '400', hex: '#a3e635' },
        { shade: '500', hex: '#84cc16' },
        { shade: '600', hex: '#65a30d' },
        { shade: '700', hex: '#4d7c0f' },
        { shade: '800', hex: '#3f6212' },
        { shade: '900', hex: '#365314' },
        { shade: '950', hex: '#1a2e05' }
      ]
    },
    {
      name: 'Green',
      shades: [
        { shade: '50', hex: '#f0fdf4' },
        { shade: '100', hex: '#dcfce7' },
        { shade: '200', hex: '#bbf7d0' },
        { shade: '300', hex: '#86efac' },
        { shade: '400', hex: '#4ade80' },
        { shade: '500', hex: '#22c55e' },
        { shade: '600', hex: '#16a34a' },
        { shade: '700', hex: '#15803d' },
        { shade: '800', hex: '#166534' },
        { shade: '900', hex: '#14532d' },
        { shade: '950', hex: '#052e16' }
      ]
    },
    {
      name: 'Emerald',
      shades: [
        { shade: '50', hex: '#ecfdf5' },
        { shade: '100', hex: '#d1fae5' },
        { shade: '200', hex: '#a7f3d0' },
        { shade: '300', hex: '#6ee7b7' },
        { shade: '400', hex: '#34d399' },
        { shade: '500', hex: '#10b981' },
        { shade: '600', hex: '#059669' },
        { shade: '700', hex: '#047857' },
        { shade: '800', hex: '#065f46' },
        { shade: '900', hex: '#064e3b' },
        { shade: '950', hex: '#022c22' }
      ]
    },
    {
      name: 'Teal',
      shades: [
        { shade: '50', hex: '#f0fdfa' },
        { shade: '100', hex: '#ccfbf1' },
        { shade: '200', hex: '#99f6e4' },
        { shade: '300', hex: '#5eead4' },
        { shade: '400', hex: '#2dd4bf' },
        { shade: '500', hex: '#14b8a6' },
        { shade: '600', hex: '#0d9488' },
        { shade: '700', hex: '#0f766e' },
        { shade: '800', hex: '#115e59' },
        { shade: '900', hex: '#134e4a' },
        { shade: '950', hex: '#042f2e' }
      ]
    },
    {
      name: 'Cyan',
      shades: [
        { shade: '50', hex: '#ecfeff' },
        { shade: '100', hex: '#cffafe' },
        { shade: '200', hex: '#a5f3fc' },
        { shade: '300', hex: '#67e8f9' },
        { shade: '400', hex: '#22d3ee' },
        { shade: '500', hex: '#06b6d4' },
        { shade: '600', hex: '#0891b2' },
        { shade: '700', hex: '#0e7490' },
        { shade: '800', hex: '#155e75' },
        { shade: '900', hex: '#164e63' },
        { shade: '950', hex: '#083344' }
      ]
    },
    {
      name: 'Sky',
      shades: [
        { shade: '50', hex: '#f0f9ff' },
        { shade: '100', hex: '#e0f2fe' },
        { shade: '200', hex: '#bae6fd' },
        { shade: '300', hex: '#7dd3fc' },
        { shade: '400', hex: '#38bdf8' },
        { shade: '500', hex: '#0ea5e9' },
        { shade: '600', hex: '#0284c7' },
        { shade: '700', hex: '#0369a1' },
        { shade: '800', hex: '#075985' },
        { shade: '900', hex: '#0c4a6e' },
        { shade: '950', hex: '#082f49' }
      ]
    },
    {
      name: 'Blue',
      shades: [
        { shade: '50', hex: '#eff6ff' },
        { shade: '100', hex: '#dbeafe' },
        { shade: '200', hex: '#bfdbfe' },
        { shade: '300', hex: '#93c5fd' },
        { shade: '400', hex: '#60a5fa' },
        { shade: '500', hex: '#3b82f6' },
        { shade: '600', hex: '#2563eb' },
        { shade: '700', hex: '#1d4ed8' },
        { shade: '800', hex: '#1e40af' },
        { shade: '900', hex: '#1e3a8a' },
        { shade: '950', hex: '#172554' }
      ]
    },
    {
      name: 'Indigo',
      shades: [
        { shade: '50', hex: '#eef2ff' },
        { shade: '100', hex: '#e0e7ff' },
        { shade: '200', hex: '#c7d2fe' },
        { shade: '300', hex: '#a5b4fc' },
        { shade: '400', hex: '#818cf8' },
        { shade: '500', hex: '#6366f1' },
        { shade: '600', hex: '#4f46e5' },
        { shade: '700', hex: '#4338ca' },
        { shade: '800', hex: '#3730a3' },
        { shade: '900', hex: '#312e81' },
        { shade: '950', hex: '#1e1b4b' }
      ]
    },
    {
      name: 'Violet',
      shades: [
        { shade: '50', hex: '#f5f3ff' },
        { shade: '100', hex: '#ede9fe' },
        { shade: '200', hex: '#ddd6fe' },
        { shade: '300', hex: '#c4b5fd' },
        { shade: '400', hex: '#a78bfa' },
        { shade: '500', hex: '#8b5cf6' },
        { shade: '600', hex: '#7c3aed' },
        { shade: '700', hex: '#6d28d9' },
        { shade: '800', hex: '#5b21b6' },
        { shade: '900', hex: '#4c1d95' },
        { shade: '950', hex: '#2e1065' }
      ]
    },
    {
      name: 'Purple',
      shades: [
        { shade: '50', hex: '#faf5ff' },
        { shade: '100', hex: '#f3e8ff' },
        { shade: '200', hex: '#e9d5ff' },
        { shade: '300', hex: '#d8b4fe' },
        { shade: '400', hex: '#c084fc' },
        { shade: '500', hex: '#a855f7' },
        { shade: '600', hex: '#9333ea' },
        { shade: '700', hex: '#7e22ce' },
        { shade: '800', hex: '#6b21a8' },
        { shade: '900', hex: '#581c87' },
        { shade: '950', hex: '#3b0764' }
      ]
    },
    {
      name: 'Fuchsia',
      shades: [
        { shade: '50', hex: '#fdf4ff' },
        { shade: '100', hex: '#fae8ff' },
        { shade: '200', hex: '#f5d0fe' },
        { shade: '300', hex: '#f0abfc' },
        { shade: '400', hex: '#e879f9' },
        { shade: '500', hex: '#d946ef' },
        { shade: '600', hex: '#c026d3' },
        { shade: '700', hex: '#a21caf' },
        { shade: '800', hex: '#86198f' },
        { shade: '900', hex: '#701a75' },
        { shade: '950', hex: '#4a044e' }
      ]
    },
    {
      name: 'Pink',
      shades: [
        { shade: '50', hex: '#fdf2f8' },
        { shade: '100', hex: '#fce7f3' },
        { shade: '200', hex: '#fbcfe8' },
        { shade: '300', hex: '#f9a8d4' },
        { shade: '400', hex: '#f472b6' },
        { shade: '500', hex: '#ec4899' },
        { shade: '600', hex: '#db2777' },
        { shade: '700', hex: '#be185d' },
        { shade: '800', hex: '#9d174d' },
        { shade: '900', hex: '#831843' },
        { shade: '950', hex: '#500724' }
      ]
    },
    {
      name: 'Rose',
      shades: [
        { shade: '50', hex: '#fff1f2' },
        { shade: '100', hex: '#ffe4e6' },
        { shade: '200', hex: '#fecdd3' },
        { shade: '300', hex: '#fda4af' },
        { shade: '400', hex: '#fb7185' },
        { shade: '500', hex: '#f43f5e' },
        { shade: '600', hex: '#e11d48' },
        { shade: '700', hex: '#be123c' },
        { shade: '800', hex: '#9f1239' },
        { shade: '900', hex: '#881337' },
        { shade: '950', hex: '#4c0519' }
      ]
    }
  ];

  async copyColorHex(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      this.copiedColor = hex;
      this.showCopiedMessage = true;
      
      // Hide message after 2 seconds
      setTimeout(() => {
        this.showCopiedMessage = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy color:', err);
      // Fallback for older browsers
      this.fallbackCopy(hex);
    }
  }

  copyCustomColor() {
    if (this.isValidHex(this.customHex)) {
      this.copyColorHex(this.customHex);
    }
  }

  isValidHex(hex: string): boolean {
    return /^#[0-9A-F]{6}$/i.test(hex);
  }

  private fallbackCopy(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      this.copiedColor = text;
      this.showCopiedMessage = true;
      setTimeout(() => {
        this.showCopiedMessage = false;
      }, 2000);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
  }
}
