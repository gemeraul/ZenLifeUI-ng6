import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Chart } from 'chart.js';
import { SentimentService } from '../services/sentiment.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  today = moment();

  userInfo: string = '<mat-icon class="icon-person">person</mat-icon>Raul Grimaldi | San Jose, Costa Rica - ' + this.today.format('dddd hh:mma');
  simpleData: string = '<p>Time spoken: 1:40min <br>Words said: 3124<br>Score: Happy pupper<br>Users involved: 2<br>Favorite word: Doggo<br>Topic: Building App<br>Volume: Low<br>Off-topic rating: 19%<br>Certainty: 98%<br>Favorite word: Doggo<br>Topic: Building App<br>Volume: Low<br>Off-topic rating: 19%<br>Certainty: 98%</p>';

  chart = [];

  tiles = [
    { isInfo: true, type: 'userInfo', cols: 3, rows: 1, color: 'lightblue' },
    { isImage: true, cols: 1, rows: 2, color: '#eef1ad' },
    { isInfo: true, type: 'totalScore', cols: 1, rows: 1, color: '#e46868' },
    { isInfo: true, type: 'intent', cols: 1, rows: 1, color: '#b5b4b4' },
    { isInfo: true, type: 'line', cols: 1, rows: 1, color: '#e69f2d' },
    { isBar: true, cols: 1, rows: 4, color: 'lightpink' },
    { isChart: true, cols: 2, rows: 4, color: '#DDBDF1' },
    { text: this.simpleData, title: 'Simple Data:', cols: 1, rows: 4, color: 'lightgreen' },
  ];

  text: string = 'some text';
  dataSource;
  dataValues: any = {};
  sentimentResponse: any;

  constructor(private _sentimentService: SentimentService) {
    this.sentimentResponse = this._sentimentService.getSentimentResponse();
  }

  ngOnInit() {
    //this.getSentimentData();
  }

  getSentimentData() {

    this._sentimentService.getUserSentiment(this.text)
      .subscribe(
      (response: any) => {
        if (!response) {
          console.log('Response is empty - ' + response);
        } else {
          console.log(response);
          this.sentimentResponse = response;
          //this.createChart();
        }
      },
      (err) => {
        console.log('getSentiment ERROR: ' + err);
        //this.spinnerService.hide();
      },
      () => {
        //this.spinnerService.hide();
      }
      );
  }


}
