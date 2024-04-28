import {Component, OnInit} from '@angular/core';
import {ExchangeService} from '../../services/exchange.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  form!: FormGroup;
  view: [number, number] = [700, 300];
  data: any[] = [];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Price';
  timeline = true;
  autoScale = true;
  colorScheme = {
    domain: ['#8B008B', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private exchangeService: ExchangeService) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl('PLN', Validators.required),
      to: new FormControl('USD', Validators.required),
      fromDate: new FormControl(null, Validators.required),
      toDate: new FormControl(null, Validators.required),
    });
  }

  getChart(): void {
    this.exchangeService.getChartsData(
      this.form.value.from,
      this.form.value.to,
      this.form.value.fromDate,
      this.form.value.toDate).subscribe(result => {
      this.data = result;
    });
  }
}
