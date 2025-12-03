import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-klocka',
  templateUrl: './klocka.html',
  styleUrls: ['./klocka.css'],
  standalone: true,
  imports: [RouterModule]
})
export class Klocka implements OnInit {
  currentTime: string = '';

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    
    this.currentTime = `${hours}:${minutes}`;
  }
}


/* const seconds = now.getSeconds().toString().padStart(2,'0'); */
/* :${seconds} */