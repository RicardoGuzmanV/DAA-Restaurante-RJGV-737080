import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: [null, [Validators.required]],
      people: [null, [Validators.required]],
      reservationDate: [null, [Validators.required]],
      reservationSchedule: [null, [Validators.required]],
      comments: [null, [Validators.maxLength(60)]],
    });
  }

  formSubmit(form: any){
    alert(
      'Gracias por reservar con nosotros\n' +
      JSON.stringify(form.value, null, 4)
    );
  }
}
