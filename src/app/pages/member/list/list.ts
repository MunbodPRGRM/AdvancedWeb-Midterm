import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import games from '../../../../assets/data/games.json';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  currentUser: any;
  allGames = games;

  selectedGame: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    } else {
      this.router.navigate(['/login']);
    }
  }

  selectGame(game: any) {
    this.selectedGame = game;
  }

  topUp(userId: string, amount: string) {
    const money = Number(amount);

    if (!userId || !money || money <= 0) {
      alert('กรุณากรอก ID และจำนวนเงินให้ถูกต้อง');
      return;
    }

    alert(`ทำรายการเติมเกม ${this.selectedGame.name} สำหรับผู้ใช้ ID ${userId} จำนวน ${money} บาทสำเร็จ!`);
    this.selectedGame = null; // ปิดรายละเอียดหลังเติมเงิน
  }
}