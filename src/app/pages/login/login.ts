import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import members from '../../../assets/data/members.json';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatLabel, 
    MatInputModule, 
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';
  members = members;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const user = this.members.find(member => member.email === email && member.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/member/profile']);
    } else {
      alert('Invalid email or password.');
    }
  }
}
