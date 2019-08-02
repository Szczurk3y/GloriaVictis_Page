import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: '[app-schedule]',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 })),
        query(':enter', stagger('100ms', [
          animate('0.7s', keyframes([
            style({opacity: 0, transform: 'translateX(75px)'}),
            style({opacity: 1, transform: 'scale3d(1.10, 1.10, 1.10)'}),
            style({transform: 'scale3d(0.95, 0.95, 0.95)'}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1'}),
          ]))
        ]))
      ])
    ])
  ]
})
export class ScheduleComponent implements OnInit {

  public schedules = [
    {
      name: "schedule1",
      path: "../../../../assets/home/schedule/schedule1.png",
      id: '1'
    },
    {
      name: "schedule2",
      path: "../../../../assets/home/schedule/schedule1.png",
      id: '2'
    },
    {
      name: "schedule3",
      path: "../../../../assets/home/schedule/schedule1.png",
      id: '3'
    },
    {
      name: "schedule4",
      path: "../../../../assets/home/schedule/schedule1.png",
      id: '4'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
