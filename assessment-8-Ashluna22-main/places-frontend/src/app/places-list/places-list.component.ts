import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Place } from '../models/place.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-places-list', 
  imports:[CommonModule, FormsModule],
  templateUrl: './places-list.component.html',
    styleUrls: ['./places-list.component.css'],

})
export class PlacesListComponent implements OnInit {
  places: Place[] = []; 
  newPlace: Place = { name: '', firstTime: false }; 

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.loadPlaces(); 
  }

  loadPlaces(): void {
    this.placesService.getPlaces().subscribe((data) => {
      this.places = data;
    });
  }

  
  addPlace(): void {
    if (this.newPlace.name.trim()) {
      this.placesService.addPlace(this.newPlace).subscribe(() => {
        this.loadPlaces(); // Refresh the list
        this.newPlace = { name: '', firstTime: false }; 
      });
    }
  }
}
