import { Component, OnInit, Input } from '@angular/core'
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: '[app-news]',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news = [
    {
      desc: "we won the tournament",
      path: "../../../../assets/home/kotek.jpg",
      id: "1"
    },
    {
      desc: "a new team",
      path: "../../../../assets/home/kotek.jpg",
      id: "2"
    },
    {
      desc: "recruitment starts",
      path: "../../../../assets/home/jez.jpg",
      id: "3"

    },
    {
      desc: "recruitment starts",
      path: "../../../../assets/home/jez.jpg",
      id: "4"

    },
    {
      desc: "recruitment starts",
      path: "../../../../assets/home/jez.jpg",
      id: "5"

    },
    {
      desc: "recruitment starts",
      path: "../../../../assets/home/jez.jpg",
      id: "6"

    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  
}
