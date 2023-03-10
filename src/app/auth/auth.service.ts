import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor () {}

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
