import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Inventory } from '../Models/Inventory';



@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseUrl = 'http://localhost:8081/test/api/inventory';

  constructor(private http: HttpClient) {}

  getInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>('http://localhost:8081/test/api/inventory');
  }

  // POST to update inventory
  updateInventory(payload: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/update`, payload, { responseType: 'text' });
  }



}
