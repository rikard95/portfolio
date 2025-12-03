import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [FormsModule, Klocka, Projekt],
  templateUrl: './kontakt.html',
  styleUrls: ['./kontakt.css']
})
export class Kontakt implements OnInit{
  name: string = '';
  email: string = '';
  message: string = '';

  ngOnInit(): void {
    document.body.style.backgroundColor = '#000e2fff';
  }

  submitForm() {
    //TODO koppla till back-end eller utveckla bättre
    console.log('Meddelande skickat:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Tack för ditt meddelande! Jag återkommer snart.');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
