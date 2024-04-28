import {Component, ViewChild} from '@angular/core';
import {ExchangeService} from '../../services/exchange.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  value!: string;

  @ViewChild('formRef')
  formRef: NgForm | undefined;

  constructor(private exchangeService: ExchangeService) {
  }

  form: FormGroup = new FormGroup({
    currencyFrom: new FormControl('PLN'),
    currencyTo: new FormControl('USD'),
    amount: new FormControl(0),
  });

  calculate(from: string, to: string): void {
    let rate: number;
    this.exchangeService.getRates(from).subscribe(result => {
      switch (to) {
        case 'PLN':
          rate = result.rates.PLN;
          break;
        case 'USD':
          rate = result.rates.USD;
          break;
        case 'CHF':
          rate = result.rates.CHF;
          break;
        case 'GBP':
          rate = result.rates.GBP;
          break;
        default:
          rate = 0;
      }
      this.value = `${(this.form.get('amount')?.value * rate).toFixed(2)} ${to}`;
    });
  }
}
