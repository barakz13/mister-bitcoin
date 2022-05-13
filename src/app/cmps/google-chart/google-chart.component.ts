import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/models/chart.model';

@Component({
  selector: 'google-chartt',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss'],
})
export class GoogleChartComponent implements OnInit {
  constructor() {}
  @Input() chart: Chart;

  ngOnInit(): void {}
}
