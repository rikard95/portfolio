import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrera',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './registrera.html',
  styleUrls: ['./registrera.css']
})
export class Registrera implements OnInit, OnDestroy {
  username = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    document.body.classList.add('register-page'); 
  }

  ngOnDestroy() {
    document.body.classList.remove('register-page'); 
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      this.message = 'Vänligen fyll i alla fält';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Lösenorden matchar inte';
      return;
    }

    const payload = { username: this.username, password: this.password };

    this.http.post('http://localhost:5289/api/auth/register', payload)
      .subscribe({
        next: (res: any) => {
          this.message = res.message;
          if (res.success) this.router.navigate(['/login']);
        },
        error: (err) => {
          if (err.status === 409) this.message = 'Användarnamnet finns redan';
          else this.message = 'Ett fel uppstod, försök igen';
        }
      });
  }
}
