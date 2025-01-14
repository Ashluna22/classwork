import { Component } from '@angular/core';
import { PlacesListComponent } from './places-list/places-list.component';

@Component({
  selector: 'app-root',
  imports:[PlacesListComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {}
