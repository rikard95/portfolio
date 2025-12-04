import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Klocka } from "../../shared/klocka/klocka";
import { Projekt } from '../../shared/projekt/projekt';

interface CalendarDay {
  date: Date;
  note: string;
}

@Component({
  selector: 'app-kalender',
  standalone: true,
  imports: [CommonModule, FormsModule, Klocka, Projekt],
  templateUrl: './kalender.html',
  styleUrls: ['./kalender.css']
})
export class Kalender implements OnInit {

  currentYear: number;
  currentMonth: number;
  monthDays: CalendarDay[] = [];
  months: string[] = [
    'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
    'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
  ];

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Måndag = 0

    const calendarDays: CalendarDay[] = [];

    for (let i = 0; i < startDay; i++) {
      calendarDays.push({ date: new Date(NaN), note: '' });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      const key = this.getStorageKey(date);
      const note = localStorage.getItem(key) || '';
      calendarDays.push({ date, note });
    }

    this.monthDays = calendarDays;
  }

  scrollToTop(): void {
  const header: HTMLElement | null = document.querySelector('.kalender-header');
  if (header) {
    header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  getStorageKey(date: Date): string {
    return `kalender-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  saveNote(day: CalendarDay, event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    const key = this.getStorageKey(day.date);
    localStorage.setItem(key, input.value);
    day.note = input.value;
  }

  changeMonth(offset: number): void {
    this.currentMonth += offset;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }

  onMonthSelect(event: any): void {
    this.currentMonth = Number(event.target.value);
    this.generateCalendar();
  }

  onYearChange(event: any): void {
    this.currentYear = Number(event.target.value);
    this.generateCalendar();
  }

  isInvalidDate(date: Date): boolean {
    return isNaN(date.getTime());
  }

  isToday(date: Date): boolean {
    if (this.isInvalidDate(date)) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  getWeekdayName(date: Date): string {
    if (this.isInvalidDate(date)) return '';
    const weekdays = ['Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör', 'Sön'];
    const jsDay = date.getDay();
    return jsDay === 0 ? 'Sön' : weekdays[jsDay - 1];
  }
}

