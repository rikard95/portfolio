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
    // Remove whitespace and validate characters
    const sanitized = expr.replace(/\s/g, '');
    
    // Only allow numbers, operators, decimal points, and parentheses
    if (!/^[0-9+\-*/.()]+$/.test(sanitized)) {
      throw new Error('Invalid characters in expression');
    }
    
    // Check for balanced parentheses
    let balance = 0;
    for (const char of sanitized) {
      if (char === '(') balance++;
      if (char === ')') balance--;
      if (balance < 0) throw new Error('Unbalanced parentheses');
    }
    if (balance !== 0) throw new Error('Unbalanced parentheses');
    
    // Parse and evaluate the expression safely
    return this.parseExpression(sanitized);
  }

  private parseExpression(expr: string): number {
    // Recursive descent parser for mathematical expressions
    let pos = 0;

    const peek = (): string => expr[pos] || '';
    const consume = (): string => expr[pos++] || '';

    const parseNumber = (): number => {
      let num = '';
      while (/[0-9.]/.test(peek())) {
        num += consume();
      }
      if (num === '') throw new Error('Expected number');
      return parseFloat(num);
    };

    const parseFactor = (): number => {
      if (peek() === '(') {
        consume(); // (
        const val = parseAddSub();
        if (consume() !== ')') throw new Error('Expected )');
        return val;
      } else if (peek() === '-') {
        consume(); // -
        return -parseFactor();
      } else if (peek() === '+') {
        consume(); // +
        return parseFactor();
      }
      return parseNumber();
    };

    const parseMulDiv = (): number => {
      let val = parseFactor();
      while (peek() === '*' || peek() === '/') {
        const op = consume();
        const right = parseFactor();
        if (op === '*') {
          val *= right;
        } else {
          if (right === 0) throw new Error('Division by zero');
          val /= right;
        }
      }
      return val;
    };

    const parseAddSub = (): number => {
      let val = parseMulDiv();
      while (peek() === '+' || (peek() === '-' && pos > 0)) {
        const op = consume();
        const right = parseMulDiv();
        if (op === '+') {
          val += right;
        } else {
          val -= right;
        }
      }
      return val;
    };

    const result = parseAddSub();
    if (pos < expr.length) {
      throw new Error('Unexpected character: ' + peek());
    }
    return result;
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
