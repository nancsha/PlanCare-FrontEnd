// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { RegistrationStatusService } from '../../services/registration-status.service';
// import { CarRegistrationStatus } from '../../models/car-registration-status';

// @Component({
//   selector: 'app-registration-status',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterLink
//   ],
//   templateUrl: './registration-status.html',
//   styleUrls: ['./registration-status.css']
// })
// export class RegistrationStatus implements OnInit, OnDestroy {

//   // 👇 explicitly type this
//   statuses: CarRegistrationStatus[] = [];

//   private sub?: Subscription;

//   constructor(private registrationStatusService: RegistrationStatusService) {}

//   ngOnInit(): void {
//     this.sub = this.registrationStatusService.statuses$.subscribe(
//       (s: CarRegistrationStatus[]) => {
//         this.statuses = s;
//       }
//     );
//   }

//   ngOnDestroy(): void {
//     this.sub?.unsubscribe();
//   }

//   getStatusLabel(status: CarRegistrationStatus): string {
//     return status.isExpired ? 'Expired' : 'Valid';
//   }

//   getStatusClass(status: CarRegistrationStatus): string {
//     return status.isExpired ? 'expired' : 'valid';
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RegistrationStatusService } from '../../services/registration-status.service';
import { CarRegistrationStatus } from '../../models/car-registration-status';

@Component({
  selector: 'app-registration-status',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './registration-status.html',
  styleUrls: ['./registration-status.css']
})
export class RegistrationStatus implements OnInit, OnDestroy {

  statuses: CarRegistrationStatus[] = [];
  displayedColumns: string[] = ['carId', 'registrationNumber', 'registrationExpiry', 'status'];

  private sub?: Subscription;

  constructor(private registrationStatusService: RegistrationStatusService) {}

  ngOnInit(): void {
    this.sub = this.registrationStatusService.statuses$.subscribe(data => {
      this.statuses = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  isExpired(s: CarRegistrationStatus): boolean {
    return s.isExpired;
  }
}

