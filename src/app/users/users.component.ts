import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    { username: 'Ricardo Guzman' },
  ];

  displayedColumns: string[] = [
    'username',
    'actions',
  ]

  addButtonClicked(){
    alert('Boton de addicion activado');
  }

  deleteButtonClicked(){
    alert('Boton de borrado activado');
  }
}
