import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './car-list.html',
  styleUrls: ['./car-list.css']
})
export class CarList implements OnInit {

  cars: Car[] = [];
  loading = false;
  error?: string;
  makeFilter = '';

  // columns for Angular Material table
  displayedColumns: string[] = ['id', 'make', 'model', 'registrationNumber', 'registrationExpiry'];

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
