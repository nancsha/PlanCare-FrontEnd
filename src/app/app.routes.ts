
import { Routes } from '@angular/router';
import { CarList } from './components/car-list/car-list';
import { RegistrationStatus } from './components/registration-status/registration-status';

export const routes: Routes = [
  { path: '', component: CarList },
  { path: 'registration', component: RegistrationStatus },
  { path: '**', redirectTo: '' }
];
