import { Component, OnInit } from '@angular/core';
import { Reservation } from '../_models/reservation.model';
import { ReservationService } from '../_services/res/reservation.service';

@Component({
  selector: 'app-res-list',
  templateUrl: './res-list.component.html',
  styleUrls: ['./res-list.component.css']
})
export class ResListComponent implements OnInit{
  reservations: Reservation[] = [ ];

  displayedColumns: string[] = [
    'name',
    'reservationDate',
    'reservationSchedule',
    'people',
    'phone',
    'email',
    'actions',
  ]

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
      this.reservations = this.reservationService.getReservations();
  }

  editButtonClicked(){
    alert('Boton de edicion activado');
  }

  deleteButtonClicked(){
    this.reservationService.deleteReservation();
  }
}
