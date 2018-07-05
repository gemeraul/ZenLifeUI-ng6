import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-card',
  templateUrl: './bar-card.component.html',
  styleUrls: ['./bar-card.component.css']
})
export class BarCardComponent implements OnInit {

  today = moment();
  chart = [];

  @ViewChild('bar') bar: ElementRef;

  constructor() { }

  ngOnInit() {
    let barCtx = this.bar.nativeElement.getContext('2d');

    var data = {
      labels: [
        "Positive",
        "Negative"
      ],
      datasets: [
        {
          "label": "# of words",
          "data": [132, 98],   // Example data
          "fill": true,
          "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
          "borderWidth": 1
        }]
    };

    var chart = new Chart(
      barCtx,
      {
        "type": 'bar',
        "data": data,
        "options": {
         
          "responsive": true, 
          "maintainAspectRatio": false,
           "scales": { 
             "yAxes": [ 
               { "ticks": 
                  { "beginAtZero": true } 
                }
              ] 
            }
        }
      }
    );
  }

}