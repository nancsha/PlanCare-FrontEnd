export interface Car {
  id: number;
  make: string;
  model: string;
  registrationNumber: string;
  registrationExpiry: string; // from backend as ISO string
}