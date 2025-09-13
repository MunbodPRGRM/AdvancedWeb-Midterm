import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-member',
  imports: [
    RouterOutlet
  ],
  templateUrl: './member.html',
  styleUrl: './member.scss'
})
export class Member {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']);
    }
  }
}
