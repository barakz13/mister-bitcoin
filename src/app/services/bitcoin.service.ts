import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public getRate(coins: number) {
    const URL = `https://blockchain.info/tobtc?currency=USD&value=${coins}`;
    return this.http.get<number>(URL).pipe(map((res) => res));
  }

  public getMarketPrice() {
    const URL = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`;
    return this.http
      .get<{ values: [{ x: number; y: number }] }>(URL)
      .pipe(map(({ values }) => values.map((value) => Object.values(value))));
  }

  public getConfirmedTransactions() {
    const URL = `https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`;
    return this.http
      .get<{ values: [{ x: number; y: number }] }>(URL)
      .pipe(map(({ values }) => values.map((value) => Object.values(value))));
  }
}
