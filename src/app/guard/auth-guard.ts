import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class NoLoginAccessGuard {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('currentUser');

    if (user) {
      // ยัง login → redirect ไป profile
      this.router.navigate(['/member/profile']);
      return false; // ไม่ให้เข้าหน้า login หรือ /
    }

    return true; // ยังไม่ได้ login → อนุญาต
  }
}
