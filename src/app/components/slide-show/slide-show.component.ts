import {Component, OnInit} from '@angular/core';
import {ExchangeService} from '../../services/exchange.service';
import {PexelsService} from '../../services/pexels.service';
// @ts-ignore
import currenciesJSON from '../../currencies.json';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  images: string[] = [];
  rates: number[] = [];
  cities = currenciesJSON.cities;

  constructor(private exchangeService: ExchangeService, private photoService: PexelsService) {
  }

  ngOnInit(): void {
    for (const city of this.cities) {
      this.getImg(city.city);
      this.getRate(city.from, city.to);
    }
  }

  getImg(city: string): void {
    this.photoService.getImageUrl(city).subscribe(result => {
      this.images.push(result);
    });
  }

  getRate(from: string, to: string): void {
    this.exchangeService.getRates(from).subscribe(result => {
      switch (to) {
        case 'PLN':
          this.rates.push(result.rates.PLN);
          break;
        case 'USD':
          this.rates.push(result.rates.USD);
          break;
        case 'CHF':
          this.rates.push(result.rates.CHF);
          break;
        case 'GBP':
          this.rates.push(result.rates.GBP);
          break;
        default:
          this.rates.push(0);
          break;
      }
    });
  }
}
