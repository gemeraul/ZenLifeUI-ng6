import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  @Input() type;

  totalScore = 'Sentiment Score:';

  today = moment().format('dddd hh:mma');
  userInfo = 'Raul Grimaldi Barahona | Videogame Athlete | San Jose, Costa Rica - ' + this.today;
  line = 'Sentiment across time';
  intent = 'Speech Intent:';

  textDisplayed: string;

  autoTicks = true;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 100;
  vertical = false;
  timeAt;

  constructor() { }

  ngOnInit() {
    if (this.type == 'userInfo') {
      this.textDisplayed = this.userInfo;
    } else if (this.type == 'totalScore') {
      this.textDisplayed = this.totalScore;
    } else if (this.type == 'intent') {
      this.textDisplayed = this.intent;
    } else {
      this.textDisplayed = this.line;
      this.formatTime(this.value);
    }
  }

  formatTime(value) {
    if (value >= 60) {
      let minutes = Math.floor(value / 60);
      let seconds = value % 60 < 10 ? '0' + value % 60 : value % 60;
      this.timeAt = minutes + ':' + seconds + 'min';
    } else {
      this.timeAt = value + 's';
    }
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 60) {
      let minutes = Math.floor(value / 60);
      let seconds = value % 60 < 10 ? '0' + value % 60 : value % 60;
      return minutes + ':' + seconds + 'min';
    } else {
      return value + 's';
    }

  }

}
