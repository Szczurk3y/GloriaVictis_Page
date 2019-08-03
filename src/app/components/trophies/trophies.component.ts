import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-trophies]',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {

  public firstPlace = [
    "Clutch it league"
  ];
  public secondPlace = [
    "EzLeague.pl"
  ];
  public thirdPlace = [
    "Elovego Esports Cup 2019",
    "ESL Mistrzostwa Polski div.2"
  ]

  constructor() { }

  ngOnInit() {
  }

}
