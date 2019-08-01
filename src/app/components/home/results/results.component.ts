import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: '[app-results]',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 })),
        query(':enter', stagger('75ms', [
          animate('1s', keyframes([
            style({opacity: 0, transform: 'translateY(75px)'}),
            style({opacity: 1, transform: 'scale3d(1.10, 1.10, 1.10)'}),
            style({transform: 'scale3d(0.95, 0.95, 0.95)'}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1'}),
          ]))
        ]))
      ])
    ])
  ]
})
export class ResultsComponent implements OnInit {

  public results = [
    {
      name: "result1",
      path: "../../../../assets/home/results/rectangle.png",
      id: '1'
    },
    {
      name: "result2",
      path: "../../../../assets/home/results/rectangle.png",
      id: '2'
    },
    {
      name: "result3",
      path: "../../../../assets/home/results/rectangle.png",
      id: '3'
    },
    {
      name: "result4",
      path: "../../../../assets/home/results/rectangle.png",
      id: '4'
    },
    {
      name: "result5",
      path: "../../../../assets/home/results/rectangle.png",
      id: '5'
    },
    {
      name: "result6",
      path: "../../../../assets/home/results/rectangle.png",
      id: '6'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getUrl(url: string)
  {
    return url;
  }
}
