export interface CarRegistrationStatus {
  carId: number;
  registrationNumber: string;
  registrationExpiry: string;
  isExpired: boolean;
}