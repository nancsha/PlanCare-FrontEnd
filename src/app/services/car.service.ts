import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../app/models/car';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getCars(make?: string): Observable<Car[]> {
    let params = new HttpParams();
    if (make) {
      params = params.set('make', make);
    }

    return this.http.get<Car[]>(`${this.baseUrl}/api/cars`, { params });
  }
}