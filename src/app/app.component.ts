import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';

  employees = [
    {'name': 'Fazt', position: 'manager'},
    {'name': 'Tomas', position: 'Designer'},
    {'name': 'Ramon', position: 'Programmer'},
    {'name': 'Jose', position: 'Full Stack'}
  ];

  model:any = {};

  addEmployee(): void {

  }

  deleteEmployee(): void {

  }

  editEmployee(): void {

  }

  updateEmployee(): void {

  }
}
