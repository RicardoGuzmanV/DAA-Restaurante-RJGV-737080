import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit(form: any) {
    alert(
      'Gracias por reservar con nosotros\n' +
      JSON.stringify(form.value, null, 4)
    );
  }
}
