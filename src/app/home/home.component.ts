import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  const menu = document.querySelector<HTMLDivElement>("#menu-icon");
  const navbar = document.querySelector<HTMLElement>(".navbar");

  menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
  });

  window.onscroll = () => {
    navbar.classList.remove("active");
  };
}
