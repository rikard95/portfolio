import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Projekt } from '../../shared/projekt/projekt';
import { Klocka } from '../../shared/klocka/klocka';

interface Project {
  name: string;
  slides: string[];
}

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [CommonModule, FormsModule, Projekt, Klocka],
  templateUrl: './slides.html',
  styleUrls: ['./slides.css']
})
export class Slides implements OnInit {
  projects: Project[] = [];
  selectedProjectIndex: number = 0;

  newProjectName: string = '';
  newText: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    this.loadProjects();
  }

  // Projektfunktioner
  addProject() {
    if (!this.newProjectName.trim()) return;
    this.projects.push({ name: this.newProjectName.trim(), slides: [] });
    this.newProjectName = '';
    this.selectedProjectIndex = this.projects.length - 1;
    this.currentIndex = 0;
    this.saveProjects();
  }

  selectProject(index: number) {
    this.selectedProjectIndex = index;
    this.currentIndex = 0;
  }

  removeProject(index: number) {
    this.projects.splice(index, 1);
    if (this.selectedProjectIndex >= this.projects.length) {
      this.selectedProjectIndex = this.projects.length - 1;
    }
    this.currentIndex = 0;
    this.saveProjects();
  }

  addText() {
    const project = this.projects[this.selectedProjectIndex];
    if (!project || !this.newText.trim()) return;
    project.slides.push(this.newText.trim());
    this.newText = '';
    this.currentIndex = project.slides.length - 1;
    this.saveProjects();
  }

  removeSlide(index: number) {
    const project = this.projects[this.selectedProjectIndex];
    if (!project) return;
    project.slides.splice(index, 1);
    if (this.currentIndex >= project.slides.length) {
      this.currentIndex = project.slides.length - 1;
    }
    this.saveProjects();
  }

  prevSlide() {
    const project = this.projects[this.selectedProjectIndex];
    if (!project || project.slides.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + project.slides.length) % project.slides.length;
  }

  nextSlide() {
    const project = this.projects[this.selectedProjectIndex];
    if (!project || project.slides.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % project.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  saveProjects() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  loadProjects() {
    const saved = localStorage.getItem('projects');
    if (saved) this.projects = JSON.parse(saved);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') this.prevSlide();
    else if (event.key === 'ArrowRight') this.nextSlide();
  }

  get currentProject(): Project | null {
    return this.projects[this.selectedProjectIndex] || null;
  }
}
