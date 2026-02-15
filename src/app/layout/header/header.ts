import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourService } from '../../shared/services/tour.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, AfterViewInit {
  isDarkMode = true;
  isScrolled = false;
  private headerElement: HTMLElement | null = null;

  constructor(private elementRef: ElementRef, private tourService: TourService) {}

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
    this.isScrolled = window.scrollY > 50;
    if (this.headerElement) {
      if (this.isScrolled) {
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

  startTour() {
    this.tourService.startTour();
  }
}
