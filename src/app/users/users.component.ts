import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/users.model';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[] =  [];

  displayedColumns: string[] = [
    'username',
    'name',
    'actions',
  ]

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.users = this.userService.getUsers();
  }

  addButtonClicked(){
    alert('Boton de addicion activado');
  }

  deleteButtonClicked(){
    this.userService.deleteUser();
  }
}
