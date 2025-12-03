import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit, OnDestroy {
  username = '';
  password = '';
  message = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() { document.body.classList.add('login-page'); }
  ngOnDestroy() { document.body.classList.remove('login-page'); }

  onLogin(form: NgForm) {
    if (form.invalid) {
      this.message = 'Vänligen skriv in dina uppgifter';
      return;
    }

    const payload = { username: this.username, password: this.password };

    this.http.post('http://localhost:5289/api/auth/login', payload)
      .subscribe({
        next: (res: any) => {
          this.message = res.message;
          if (res.success) this.router.navigate(['/hem']);
        },
        error: (err) => {
          if (err.status === 400 || err.status === 401) this.message = err.error?.message;
          else this.message = 'Ett fel uppstod, försök igen';
        }
      });
  }
}
