import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public router: Router) {}

  logout() {
    localStorage.removeItem('currentUser'); // ล้าง session
    this.router.navigate(['/']);
  }
}
