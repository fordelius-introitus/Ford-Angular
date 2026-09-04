import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor(private auth: Auth, private router: Router) {}

  isShown: boolean = false;

  showMenu():void {
    this.isShown = !this.isShown;
  }

  logout(): void {
    this.auth.logout();
  }
}
