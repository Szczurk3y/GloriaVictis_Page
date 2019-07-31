import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-schedule]',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
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
