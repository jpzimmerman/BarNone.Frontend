import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import { GuestOrder } from 'src/app/models/guestorder.model';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  productList: Product[] = [];
  requestOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
  };

  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  async getMenuItems(): Promise<Product[]> {
    const result2: Product[] = [];
    this.http
      .get<Product[]>(`${environment.baseBackendUrl}/api/menu/getmenuitems/`)
      .pipe(catchError(this.reportError))
      .subscribe((data) => {
        data.forEach((x) => {
          result2.push(x);
        });
        this.productList = data;
      });
    return result2;
  }

  getCachedMenuItems = () => this.productList;

  getTags(): string[] {
    const result2: string[] = [];
    this.http
      .get<string[]>(`${environment.baseBackendUrl}/api/menu/gettags`)
      .subscribe((data) => {
        data.forEach((x) => {
          result2.push(x);
        });
      });
    return result2;
  }

  addGuestOrder = (order: GuestOrder): Promise<any> => {
    console.log(JSON.stringify(order));
    return lastValueFrom(
      this.http.put(`${environment.baseBackendUrl}/api/order/AddOrder`, order, {
        headers: this.httpHeaders,
      })
    );
  };

  reportError(error: HttpErrorResponse, caught: Observable<Product[]>) {
    console.log(error.message);
    return throwError(
      () => new Error(`${error.message}, ${JSON.stringify(caught)}`)
    );
  }
}
