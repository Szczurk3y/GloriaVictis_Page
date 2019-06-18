import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-counter]',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  
  public first;
  public second;
  public third;
  public fourth;
  public fifth;


  constructor() { }

  ngOnInit() {
    this.setCounter([7, 9, 9, 9, 0]);
  }

  setCounter(arg: [number, number, number, number, number]) {
    this.fifth = arg[4];
    this.fourth = arg[3];
    this.third = arg[2];
    this.second = arg[1];
    this.first = arg[0];
    setInterval(()=>{
      this.runCounter();
    }, 1000);
  }

  runCounter() {
    this.first++;
    if(this.first > 9) {
      this.first = 0;
      this.second++;
    }
    if(this.second > 9) {
      this.second = 0;
      this.third++;
    }
    if(this.third > 9) {
      this.third = 0;
      this.fourth++;
    }
    if(this.fourth > 9) {
      this.fourth = 0;
      this.fifth++;
    }
  }

}
