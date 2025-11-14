import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // 1. Créer une liste de 'bouttons / routes' qui seront affichés dans la navbar

  navItems = [
    { href: "actualites", label: "Actualités" },
    { href: "comptes", label: "Nos comptes" },
    { href: "signaux-demo", label: "Démo: les signaux" },
    { href: "actualites-avec-signaux", label: "Actualités avec signaux" },
    { href: "premiers-tests-unitaires", label: "Tests unitaires" },
  ]

}
