import { Component, OnInit, Input } from '@angular/core'
import { NavComponent } from '../nav/nav.component';
import { trigger, transition, animate, style, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: '[app-news]',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 })),
        query(':enter', stagger('75ms', [
          animate('1s', keyframes([
            style({opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3'}),
            style({opacity: 1, transform: 'scale3d(1.10, 1.10, 1.10)'}),
            style({transform: 'scale3d(0.9, 0.9, 0.9)'}),
            style({transform: 'scale3d(1.03, 1.03, 1.03'}),
            style({transform: 'scale3d(0.97, 0.97, 0.97'}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1'}),
          ]))
        ]))
      ])
    ])
  ]
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
