import { Injectable } from '@angular/core';
import { Users } from 'src/app/_models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Users[] =  [
    { username: 'rjguzmanv', name: 'Ricardo Guzman' },
  ];

  constructor() { }

  getUsers(): Users[] {
    return this.users;
  }

  deleteUser() {
    alert('Boton de borrado activado');
  }
}
