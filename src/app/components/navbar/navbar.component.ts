import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links = [
    { url: '/inicio', text: 'Inicio' },
    { url: '/servicios', text: 'Servicios' },
    { url: '/trabajos', text: 'Trabajos' },
    { url: '/turnos', text: 'Turnos' },
    { url: '/opiniones', text: 'Opiniones' },
    { url: '/nosotros', text: 'Nosotros' },
    { url: '/contacto', text: 'Contacto' },
  ];

  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
