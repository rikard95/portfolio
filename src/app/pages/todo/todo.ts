import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Klocka } from '../../shared/klocka/klocka';
import { RouterModule } from '@angular/router';
import { Projekt } from '../../shared/projekt/projekt';

export interface Todo {
  text: string;
  category: string;
  editing: boolean;
  done: boolean;
  originalIndex?: number;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, Klocka, RouterModule, Projekt]
})
export class TodoComponent implements OnInit {
  newTodo: string = '';
  newCategory: string = '';
  selectedCategory: string = 'Allmänt';
  filterCategory: string = 'Alla';
  categories: string[] = ['Allmänt', 'Arbete', 'Hemmet', 'Studier'];
  todos: Todo[] = [];

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  addTodo() {
    const trimmed = this.newTodo.trim();
    if (trimmed) {
      const todo: Todo = {
        text: trimmed,
        category: this.selectedCategory,
        editing: false,
        done: false,
        originalIndex: this.todos.length
      };
      this.todos.push(todo);
      this.newTodo = '';
      this.saveToLocalStorage();
    }
  }

  addCategory() {
    const trimmed = this.newCategory.trim();
    if (trimmed && !this.categories.includes(trimmed)) {
      this.categories.push(trimmed);
      this.selectedCategory = trimmed;
      this.newCategory = '';
      this.saveToLocalStorage();
    }
  }

  deleteCategory(index: number) {
    const categoryToDelete = this.categories[index];
    this.todos = this.todos.filter(todo => todo.category !== categoryToDelete);
    this.categories.splice(index, 1);
    if (this.filterCategory === categoryToDelete) this.filterCategory = 'Alla';
    if (this.selectedCategory === categoryToDelete) this.selectedCategory = 'Allmänt';
    this.saveToLocalStorage();
  }

  filteredTodos(): Todo[] {
    if (this.filterCategory === 'Alla') return this.todos;
    return this.todos.filter(t => t.category === this.filterCategory);
  }

  onFilterCategoryChange() {
    localStorage.setItem('filterCategory', this.filterCategory);
  }

  editTodo(todo: Todo) {
    todo.editing = !todo.editing;
    this.saveToLocalStorage();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.saveToLocalStorage();
  }

  toggleDone(todo: Todo) {
    todo.done = !todo.done;

    if (todo.done) {
      this.todos = this.todos.filter(t => t !== todo);
      this.todos.unshift(todo);
    } else {
      const insertIndex = todo.originalIndex ?? this.todos.length;
      this.todos = this.todos.filter(t => t !== todo);
      this.todos.splice(insertIndex, 0, todo);
    }

    this.todos.forEach((t, i) => { if(!t.done) t.originalIndex = i; });

    this.saveToLocalStorage();
  }

  moveUp(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > 0) {
      [this.todos[index - 1], this.todos[index]] = [this.todos[index], this.todos[index - 1]];
      this.saveToLocalStorage();
    }
  }

  moveDown(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index < this.todos.length - 1) {
      [this.todos[index + 1], this.todos[index]] = [this.todos[index], this.todos[index + 1]];
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('categories', JSON.stringify(this.categories));
    localStorage.setItem('filterCategory', this.filterCategory);
  }

  loadFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    const savedCategories = localStorage.getItem('categories');
    const savedFilterCategory = localStorage.getItem('filterCategory');
    if (savedTodos) this.todos = JSON.parse(savedTodos);
    if (savedCategories) this.categories = JSON.parse(savedCategories);
    if (savedFilterCategory) this.filterCategory = savedFilterCategory;
  }
}
