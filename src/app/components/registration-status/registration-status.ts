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
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationStatusService } from '../../services/registration-status.service';
import { CarRegistrationStatus } from '../../models/car-registration-status';

@Component({
  selector: 'app-registration-status',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './registration-status.html',
  styleUrls: ['./registration-status.css']
})
export class RegistrationStatus implements OnInit, OnDestroy {

  // 👇 explicitly type this
  statuses: CarRegistrationStatus[] = [];

  private sub?: Subscription;

  constructor(private registrationStatusService: RegistrationStatusService) {}

  ngOnInit(): void {
    this.sub = this.registrationStatusService.statuses$.subscribe(
      (s: CarRegistrationStatus[]) => {
        this.statuses = s;
      }
    );
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

