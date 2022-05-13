import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Chart } from 'src/app/models/chart.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}
  marketPriceChart: Chart;
  confirmedTransactionsChart: Chart;

  async ngOnInit(): Promise<void> {
    await this.loadMarketPrice();
    await this.loadConfirmedTransactions();
  }

  async loadMarketPrice() {
    this.bitcoinService.getMarketPrice().subscribe(
      (result) => {
        this.setMarketPrice(result);
      },
      (err) => {
        console.log('Error getting Market Price');
      }
    );
  }

  setMarketPrice(result: number[][]) {
    this.marketPriceChart = {
      type: ChartType.Line,
      title: 'Market Price (USD)',
      options: {
        colors: ['#00FF00'],
      },
      data: result,
      dynamicResize: true,
    };
  }

  async loadConfirmedTransactions() {
    this.bitcoinService.getConfirmedTransactions().subscribe(
      (result) => {
        this.setConfirmedTransactions(result);
      },
      (err) => {
        console.log('Error getting Confirmed Transactions');
      }
    );
  }

  setConfirmedTransactions(result: number[][]) {
    this.confirmedTransactionsChart = {
      type: ChartType.Line,
      title: 'Confirmed Transactions Per Day',
      options: {
        colors: ['#0000FF'],
      },
      data: result,
      dynamicResize: true,
    };
  }
}
