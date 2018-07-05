import { Component, OnInit, ElementRef, ViewChild, Input, NgZone } from '@angular/core';
import * as moment from 'moment';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {

  @Input() chartData: any;
  today = moment();
  chart = [];
  subscription: Subscription;
  message;
  sentimentResponse;
  pieLabels = [];
  pieValues = [];

  @ViewChild('pie') pie: ElementRef;

  constructor() {

  }

  setPieLabels() {
    let self = this;
    this.chartData.otherEmotions.forEach(function (emotion) {
      emotion.label = emotion.label[0].toUpperCase() + emotion.label.slice(1);
      self.pieLabels.push('' + emotion.label)
    })
    console.log(this.pieLabels)
  }

  setPieValues() {
    let self = this;
    this.chartData.otherEmotions.forEach(function (emotion) {
      self.pieValues.push(emotion.perc)
    })
    console.log(this.pieValues)
  }


  ngOnInit() {
    console.log(this.chartData)
    this.setPieLabels();
    this.setPieValues();
    this.createChart();
  }

  createChart() {
    let pieCtx = this.pie.nativeElement.getContext('2d');

    var data = {
      labels: this.pieLabels,
      datasets: [
        {
          "data": this.pieValues,
          "backgroundColor": [
            "#f1e587",
            "#ff7474",
            "lightblue",
            "#bfbcbb",
            "pink"
          ]
        }]
    };

    var chart = new Chart(
      pieCtx,
      {
        "type": 'pie',
        "data": data,
        "options": {
          "cutoutPercentage": 40,
          "animation": {
            "animateScale": true,
            "animateRotate": false
          }
        }
      }
    );
  }

}
