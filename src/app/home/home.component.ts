import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SentimentService } from '../services/sentiment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text: string = 'some text';
  sentimentResponse: any;
  showSpinner: boolean;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private router: Router, private _sentimentService: SentimentService) { }
  
  speak() {
    this.showSpinner = true;
    this.getSentimentData();
    //this.router.navigateByUrl('/report');
  }

  ngOnInit() {
    this.showSpinner = false;
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
          this._sentimentService.storeSentimentResponse(response);
          this.router.navigateByUrl('/report');
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
