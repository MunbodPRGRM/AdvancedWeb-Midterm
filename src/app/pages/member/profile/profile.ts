import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import games from '../../../../assets/data/games.json';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, 
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  currentUser: any;
  allGames = games;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
