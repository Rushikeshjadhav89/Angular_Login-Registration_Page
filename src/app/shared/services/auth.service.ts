// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(userMail: string, password: string): boolean {
   
    if (userMail === userMail && password === password){
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  register(user: any): boolean {
    
    console.log('User registered:', user);
    return true;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
