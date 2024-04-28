import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from '../models/interfaces/currency';
import { environment } from '../../environments/environment';
import {map, toArray} from 'rxjs/operators';
import {ChartItem} from '../models/interfaces/chart-item';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  getRates(currency: string): Observable<Currency> {
    return this.http.get<Currency>(`${environment.ratesUrl}${currency}`).pipe(
      map((data: any) => {
        return {
          base: data.base,
          date: data.date,
          rates: {
            USD: data.rates.USD,
            GBP: data.rates.GBP,
            PLN: data.rates.PLN,
            CHF: data.rates.CHF
          }
        };
      })
    );
  }
  getChartsData( from: string, to: string, fromDate: string, toDate: string ): Observable<any>
  {
    return this.http.get<ChartItem>
    (`${environment.chartURL}&start_date=${fromDate}&end_date=${toDate}&symbols=${to}&base=${from}`)
      .pipe(
        map( (data: ChartItem) => {
            return {name: to, series: Object.values(data.rates)
                .map( (element: any, index) => element = {
                    name: new Date(Object.keys(data.rates)[index]),
                    value: Number(Object.values(element).shift())
                  }
                )};
          }
        ),
        toArray(),
      );
  }

}
