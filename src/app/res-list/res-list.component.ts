import { Component } from '@angular/core';

@Component({
  selector: 'app-res-list',
  templateUrl: './res-list.component.html',
  styleUrls: ['./res-list.component.css']
})
export class ResListComponent {
  data = [
    { name: 'Ricardo' , email: 'ricardo@emial.com' , phone: '8119802471' , people: '2' , reservationDate: '2023-04-21' , reservationSchedule: '17:40' }
  ];

  displayedColumns: string[] = [
    'name',
    'reservationDate',
    'reservationSchedule',
    'people',
    'phone',
    'email',
    'actions',
  ]

  editButtonClicked(){
    alert('Boton de edicion activado');
  }

  deleteButtonClicked(){
    alert('Boton de borrado activado');
  }
}
