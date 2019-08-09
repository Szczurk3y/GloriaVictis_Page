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
          animate('0.75s', keyframes([
            style({opacity: 0, transform: 'translateX(-75px)'}),
            style({opacity: 1, transform: 'scale3d(1.10, 1.10, 1.10)'}),
            style({transform: 'scale3d(0.95, 0.95, 0.95)'}),
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
      desc: "A little break in our organization",
      path: "../../../../assets/home/news/news1.jpg",
      href: "https://www.facebook.com/pg/GloriaVictisTeam/posts/?ref=page_internal",
      id: "1"
    },
    {
      desc: "We achieve 3rd place on LAN",
      path: "../../../../assets/home/news/news2.jpg",
      href: "https://www.facebook.com/GloriaVictisTeam/photos/pcb.1237525636412705/1237517649746837/?type=3&theater",
      id: "2"
    },
    {
      desc: "1000 fanpage likes!",
      path: "../../../../assets/home/news/news3.jpg",
      href: "https://www.facebook.com/GloriaVictisTeam/photos/a.505958669569409/1225431974288738/?type=3&theater",
      id: "3"

    },
    {
      desc: "Our coach graphic",
      path: "../../../../assets/home/news/news4.jpg",
      href: "https://www.facebook.com/GloriaVictisTeam/photos/a.505958669569409/1221536838011585/?type=3&theater",
      id: "4"

    },
    {
      desc: "We participate in II season EzLeague.pl",
      path: "../../../../assets/home/news/news5.jpg",
      href: "https://www.facebook.com/ezleaguepl/photos/a.289815221708868/319044945452562/?type=3&theater",
      id: "5"

    },
    {
      desc: "We won the Clutch It League tournament",
      path: "../../../../assets/home/news/news6.jpg",
      href: "https://www.facebook.com/GloriaVictisTeam/photos/a.505958669569409/1208358295996106/?type=3&theater",
      id: "6"
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }
  
}
