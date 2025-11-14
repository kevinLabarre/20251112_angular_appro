import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-units-test',
  imports: [],
  templateUrl: './my-first-units-test.html',
  styleUrl: './my-first-units-test.css',
})
export class MyFirstUnitsTest {
  title = 'Liste des utilisateurs';
  users = ['Utilisateur 1', 'Utilisateur 2'];

  addUser() {
    this.users.push('Nouvel utilisateur');
  }
}
