import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, AfterViewInit {
  isDarkMode = true;
  private headerElement: HTMLElement | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light-mode');
    }
  }

  ngAfterViewInit() {
    this.headerElement = this.elementRef.nativeElement.querySelector('header');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.headerElement) {
      if (window.scrollY > 50) {
        this.headerElement.classList.add('scrolled');
      } else {
        this.headerElement.classList.remove('scrolled');
      }
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
