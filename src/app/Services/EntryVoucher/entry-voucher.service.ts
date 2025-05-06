import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntryVoucher } from 'src/app/Models/EntryVoucher';

@Injectable({
  providedIn: 'root'
})
export class EntryVoucherService {

  private baseUrl = 'http://localhost:8081/test/api/vouchers';

  constructor(private http: HttpClient) {}

   // ✅ Create
   createVoucher(voucher: EntryVoucher): Observable<EntryVoucher> {
    return this.http.post<EntryVoucher>(`${this.baseUrl}`, voucher);
  }

  // ✅ Update
  updateVoucher(id: number, voucher: EntryVoucher): Observable<EntryVoucher> {
    return this.http.put<EntryVoucher>(`${this.baseUrl}/updateVoucher/${id}`, voucher);
  }

  // ✅ Delete
  deleteVoucher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteVoucher/${id}`);
  }

  // ✅ Get by ID
  getVoucherById(id: number): Observable<EntryVoucher> {
    return this.http.get<EntryVoucher>(`${this.baseUrl}/searchVoucherByID/${id}`);
  }

  // ✅ Get by code
  getVoucherByCode(code: string): Observable<EntryVoucher> {
    return this.http.get<EntryVoucher>(`${this.baseUrl}/SearchVoucherByCode/${code}`);
  }

  // ✅ Get all
  getAllVouchers(): Observable<EntryVoucher[]> {
    return this.http.get<EntryVoucher[]>(`${this.baseUrl}`);
  }

  // ✅ Get by status
  getVouchersByStatus(status: string): Observable<EntryVoucher[]> {
    return this.http.get<EntryVoucher[]>(`${this.baseUrl}/searchVoucherByStatus/${status}`);
  }

  // ✅ Get issued between dates
  getVouchersIssuedBetween(start: string, end: string): Observable<EntryVoucher[]> {
    const params = new HttpParams().set('start', start).set('end', end);
    return this.http.get<EntryVoucher[]>(`${this.baseUrl}/searchVoucherBetweenDates/issued`, { params });
  }

  // ✅ Get expired before given date
  getExpiredVouchers(currentDate: string): Observable<EntryVoucher[]> {
    const params = new HttpParams().set('date', currentDate);
    return this.http.get<EntryVoucher[]>(`${this.baseUrl}/SearchExpiredVouchers/expired`, { params });
  }

  // ✅ Check if voucher is valid
  isVoucherValid(code: string, date: string): Observable<boolean> {
    const params = new HttpParams().set('code', code).set('date', date);
    return this.http.get<boolean>(`${this.baseUrl}/SearchValidVouchers/valid`, { params });
  }

  // ✅ Update voucher status
  updateVoucherStatus(id: number, status: string): Observable<EntryVoucher> {
    const params = new HttpParams().set('status', status);
    return this.http.patch<EntryVoucher>(`${this.baseUrl}/updateVoucherStatus/${id}/status`, null, { params });
  }

  // ✅ Extend expiry date
  extendExpiryDate(id: number, newDate: string): Observable<EntryVoucher> {
    const params = new HttpParams().set('newDate', newDate);
    return this.http.patch<EntryVoucher>(`${this.baseUrl}/extendExpiryDateVoucher/${id}/extend`, null, { params });
  }
}
