import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [
    { name: 'Ricardo' , email: 'ricardo@emial.com' , phone: '8119802471' , people: 2 , reservationDate: new Date('2023-04-21') , reservationSchedule: '17:40' }
  ];

  constructor() { }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  deleteReservation(){
    alert('Boton de borrado activado');
  }
}
