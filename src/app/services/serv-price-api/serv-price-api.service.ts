import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServPriceApiService {
  private API_URL = environment.priceApiUrl;

  constructor(private http: HttpClient) {}

  public getData(endPoint: string) {
    return this.http.get(this.API_URL + endPoint);
  }
}
