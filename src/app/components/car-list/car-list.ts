// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-car-list',
//   imports: [],
//   templateUrl: './car-list.html',
//   styleUrl: './car-list.css',
// })
// export class CarList {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './car-list.css',
})
export class CarList implements OnInit {

  cars: Car[] = [];
  loading = false;
  error?: string;
  makeFilter = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.loading = true;
    this.error = undefined;

    const make = this.makeFilter.trim() || undefined;

    this.carService.getCars(make).subscribe({
      next: cars => {
        this.cars = cars;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.error = 'Failed to load cars.';
        this.loading = false;
      }
    });
  }

  onFilterChange(): void {
    this.loadCars();
  }
}

