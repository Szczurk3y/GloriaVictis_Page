import { Component, OnInit, Input } from '@angular/core'
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: '[app-news]',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() isMenuClicked: boolean = false;

  public imageArray = [];

  constructor() {
    this.imageArray[0] = "../../../../assets/home/kotek.jpg";
    this.imageArray[1] = "../../../../assets/home/piesek.jpg";
    this.imageArray[2] = "../../../../assets/home/jez.jpg";
    this.imageArray[3] = "../../../../assets/home/virtuspro.jpg";
    this.imageArray[4] = "../../../../assets/home/major.jpg";
  }

  ngOnInit() {
  }

  
}
