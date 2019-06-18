import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: '[app-clock]',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public day = null;
  public month = null;
  public year = null;
  public hour = null;
  public minute = null;
  public second = null;

  constructor() { 
  }
  
  ngOnInit() {
    this.setDate();
    setInterval(() => {
      this.setDate();
    }, 1000);
  }

  setDate() {
    var date = new Date();
    this.day = date.getDate().toString();
    this.month = date.getMonth().toString();
    this.year = date.getFullYear().toString();
    this.hour = date.getHours().toString();
    this.minute = date.getMinutes().toString();
    this.second = date.getSeconds().toString();
    if (parseInt(this.day) < 10) {
      this.day = "0" + this.day;
    }
    if (parseInt(this.month) < 10) {
      this.month++;
      this.month = "0" + this.month;
    }
    if (parseInt(this.hour) < 10) {
      this.hour = "0" + this.hour;
    }
    if (parseInt(this.minute) < 10) {
      this.minute = "0" + this.minute;
    }
    if (parseInt(this.second) < 10) {
      this.second = "0" + this.second;
    }
  }
}
