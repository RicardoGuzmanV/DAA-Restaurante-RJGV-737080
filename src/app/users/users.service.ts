import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor( private httpClient : HttpClient ) { }

  getUsers: any = () => this.httpClient.get('http://localhost:3000/users')
  /*getUsers: any = () => {
    return [
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' },
      { name: 'juanito', color: 'Morado' }
    ]
  };*/
}
