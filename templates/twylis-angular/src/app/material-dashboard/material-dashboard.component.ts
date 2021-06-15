import { Component } from '@angular/core';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';
import {DashService} from '../dash.service';

@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})
export class MaterialDashboardComponent {

  results = {
    positive: 0,
    negative: 0,
    neutral: 0
  };

  public summary = '';
  constructor(private dashService: DashService) {}
  keyword = '';
  // Number of cards to be generated with column and rows to be covered
  cards = [
    { title: 'Search Results', cols: 2, rows: 1 },
  ];

  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
  }[] = [];

  public chart = {
    title: 'Customer Sentiment',
    type: ChartType.BarChart,
    data: [
      ['Positive', this.results.positive],
      ['Negative', this.results.negative],
      ['Neutral', this.results.neutral],
    ],
    columns: ['Polarity', 'Percentage'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };
  searchKeyword() {
    this.dashService.searchKeyword(this.keyword)
      .subscribe(
        res => {
          this.results.positive = res.positive,
          this.results.negative = res.negative,
          this.results.neutral = res.neutral
          console.log(this.results)
          this.chart = {
            title: 'Keyword Search: ' + this.keyword,
            type: ChartType.BarChart,
            data: [
              ['Positive', this.results.positive],
              ['Negative', this.results.negative],
              ['Neutral', this.results.neutral],
            ],
            columns: ['Polarity', 'Percentage'],
            options: {
              animation: {
                duration: 250,
                easing: 'ease-in-out',
                startup: true
              }
            }
          };
          this.chart = Object.assign([], this.chart)
        },
        err => console.log(err)
      );
  }

  searchKeywordSummary(){
    this.dashService.searchKeywordSummary()
      .subscribe(
        res => {
          this.summary = res.value;
          console.log('Summary: ' + this.summary)
        },
        err => console.log(err)
      )
  }
}
