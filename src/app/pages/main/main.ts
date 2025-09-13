import { Component } from '@angular/core';
import games from '../../../assets/data/games.json';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    MatCardModule, 
    CommonModule
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  allGames = games;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.router.navigate(['/member/profile']);
    }
  }
}
