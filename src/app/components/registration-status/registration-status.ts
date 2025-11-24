// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registration-status',
//   imports: [],
//   templateUrl: './registration-status.html',
//   styleUrl: './registration-status.css',
// })
// export class RegistrationStatus {

// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrationStatusService } from '../../services/registration-status.service';
import { CarRegistrationStatus } from '../../models/car-registration-status';

@Component({
  selector: 'app-registration-status',
  templateUrl: './registration-status.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './registration-status.css'
})
export class RegistrationStatus implements OnInit, OnDestroy {

  statuses: CarRegistrationStatus[] = [];
  sub?: Subscription;

  constructor(private registrationStatusService: RegistrationStatusService) {}

  ngOnInit(): void {
    this.sub = this.registrationStatusService.statuses$.subscribe(data => {
      this.statuses = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  getStatusLabel(status: CarRegistrationStatus): string {
    return status.isExpired ? 'Expired' : 'Valid';
  }

  getStatusClass(status: CarRegistrationStatus): string {
    return status.isExpired ? 'expired' : 'valid';
  }
}
