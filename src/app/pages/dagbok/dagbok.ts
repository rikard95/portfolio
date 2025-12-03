import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';

interface Entry {
  id: number;
  text: string;
  timestamp: string;
  editing?: boolean;
  editText?: string;
}

@Component({
  selector: 'app-dagbok',
  standalone: true,
  imports: [CommonModule, FormsModule, Klocka, Projekt],
  templateUrl: './dagbok.html',
  styleUrls: ['./dagbok.css']
})
export class Dagbok implements OnInit {

  newEntryText: string = '';
  entries: Entry[] = [];
  filterDate: string = '';
  private nextId: number = 1;

  ngOnInit(): void {
    this.loadEntries();
    this.setToday();
  }

  addEntry() {
    if (!this.newEntryText.trim()) return;
    const timestamp = new Date().toLocaleString();
    const entry: Entry = {
      id: this.nextId++,
      text: this.newEntryText,
      timestamp
    };
    this.entries.unshift(entry);
    this.newEntryText = '';
    this.saveEntries();
  }

  startEdit(entry: Entry) {
    entry.editing = true;
    entry.editText = entry.text;
  }

  saveEdit(entry: Entry) {
    if (!entry.editText) return;
    entry.text = entry.editText;
    entry.editing = false;
    entry.editText = '';
    this.saveEntries();
  }

  cancelEdit(entry: Entry) {
    entry.editing = false;
    entry.editText = '';
  }

  removeEntry(entry: Entry) {
    this.entries = this.entries.filter(e => e.id !== entry.id);
    this.saveEntries();
  }

  saveEntries() {
    localStorage.setItem('dagbok-entries', JSON.stringify(this.entries));
  }

  loadEntries() {
    const saved = localStorage.getItem('dagbok-entries');
    if (saved) {
      this.entries = JSON.parse(saved);
      const maxId = this.entries.reduce((max, e) => Math.max(max, e.id), 0);
      this.nextId = maxId + 1;
    }
  }

  get filteredEntries() {
    if (!this.filterDate) return this.entries;
    return this.entries.filter(e =>
      e.timestamp.startsWith(this.filterDate)
    );
  }

  setToday() {
    const today = new Date().toISOString().split('T')[0];
    this.filterDate = today;
  }

  showAll() {
    this.filterDate = '';
  }
}
