import { Component, OnInit, Input } from '@angular/core'
import { NewsComponent } from './news/news.component'
import { NavComponent } from './nav/nav.component'

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public background = "";
  public isButtonClicked: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  setBackground() {
    this.background = "../../../assets/home/bg1.jpg";
  }
  click() {
    this.isButtonClicked = !this.isButtonClicked;
  }

}
