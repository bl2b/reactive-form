import { Injectable } from '@angular/core';
import 'rxjs'
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Product } from '../_shared/models/product.interface';
import { Item } from '../_shared/models/item.interface';
import { retry } from 'rxjs/operator/retry';


@Injectable()
export class StockinventoryService {

  constructor(private _http: HttpClient) { }

  //fake db json ref: https://medium.com/letsboot/the-perfect-mock-backend-to-start-with-an-angular-application-3d751d16614f
  //json-server db.json

  getCartItems(): Observable<Item[]> {
    return this._http.get('http://localhost:3000/cart').pipe(
      map((response: Response) => {
        return response;
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  getProducts(): Observable<Product[]> {
    return this._http.get('http://localhost:3000/products').pipe(
      map((response: Response) => {
        return response;
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  // checkBranchId(id: string): Observable<boolean> {
  //   let search = new URLSearchParams();
  //   search.set('id', id);
  //   return this._http.get('/api/branches',  search)
  //   .map(res => res.json());
  //   .map((res: any[]) => !!res.length);
  // }
}
