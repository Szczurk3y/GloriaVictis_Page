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
          animate('0.75s', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)'}),
            style({opacity: 1, transform: 'scale3d(1.05, 1.05, 1.05)'}),
            style({transform: 'scale3d(0.95, 0.95, 0.95)'}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1'}),
          ]))
        ]))
      ])
    ])
  ]
})
export class ResultsComponent implements OnInit {

  public isClicked = false;

  public results = [
    {
      name: "result1",
      path: "./assets/home/results/rectangle.png",
      id: '1',
      info: "result1"
    },
    {
      name: "result2",
      path: "./assets/home/results/rectangle.png",
      id: '2',
      info: "result2"

    },
    {
      name: "result3",
      path: "./assets/home/results/rectangle.png",
      id: '3',
      info: "result3"

    },
    {
      name: "result4",
      path: "./assets/home/results/rectangle.png",
      id: '4',
      info: "result4"

    },
    {
      name: "result5",
      path: "./assets/home/results/rectangle.png",
      id: '5',
      info: "result5"
    },
    {
      name: "result6",
      path: "./assets/home/results/rectangle.png",
      id: '6',
      info: "result6"
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

  onClick() {
    this.isClicked = true;
  }
}
