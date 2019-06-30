import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public background = "";
  public isMenuClicked: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  setBackground() {
    this.background = "../../../assets/home/bg1.jpg";
  }

}
