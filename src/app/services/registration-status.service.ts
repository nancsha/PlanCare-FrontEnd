import { Injectable, OnDestroy } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { CarRegistrationStatus } from '../models/car-registration-status';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationStatusService implements OnDestroy {

  private hubConnection?: signalR.HubConnection;
  private readonly statusesSubject = new BehaviorSubject<CarRegistrationStatus[]>([]);
  statuses$ = this.statusesSubject.asObservable();

  constructor() {
    this.startConnection();
  }

  private startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiBaseUrl}/hubs/registration`)
      .withAutomaticReconnect()
      .build();

    this.hubConnection.on('RegistrationStatusUpdated', (data: CarRegistrationStatus[]) => {
      this.statusesSubject.next(data);
    });

    this.hubConnection
      .start()
      .catch(err => console.error('Error while starting SignalR connection:', err));
  }

  ngOnDestroy(): void {
    this.hubConnection?.stop();
  }
}
