import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, Klocka, Projekt, RouterModule],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorComponent implements OnInit {
  input: string = '';
  result: string = '';
  notes: string = '';

  private NOTES_KEY = 'calculatorNotes';

  ngOnInit() {
    this.loadNotes();
  }

  append(value: string) {
    this.input += value;
  }

  clear() {
    this.input = '';
    this.result = '';
  }

  deleteLast() {
    this.input = this.input.slice(0, -1);
  }

  calculate() {
    try {
      const expr = this.input.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
      const val = this.safeEvaluate(expr);
      this.result = (val === undefined || Number.isNaN(val)) ? 'Fel' : String(val);
    } catch {
      this.result = 'Fel';
    }
  }

  private safeEvaluate(expr: string): number {
    // Remove any potential harmful characters
    const sanitized = expr.replace(/[^0-9+\-*/.() ]/g, '');
    
    // Use Function constructor instead of eval - still evaluates but in isolated scope
    // This is safer than direct eval but still has risks with user input
    const fn = new Function('return (' + sanitized + ')');
    return fn();
  }


  saveNotes() {
    try {
      localStorage.setItem(this.NOTES_KEY, this.notes || '');
    } catch (e) {
      console.warn('Could not save notes to localStorage', e);
    }
  }

  loadNotes() {
    try {
      const saved = localStorage.getItem(this.NOTES_KEY);
      if (saved !== null) this.notes = saved;
    } catch (e) {
      console.warn('Could not read notes from localStorage', e);
    }
  }

  clearNotes() {
    this.notes = '';
    try {
      localStorage.removeItem(this.NOTES_KEY);
    } catch (e) {
      console.warn('Could not remove notes from localStorage', e);
    }
  }
}
