import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-sponsors]',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  public sponsors = [
    {
      picture: "../../../../assets/home/sponsors/mtg.png"
    },{
      picture: "../../../../assets/home/sponsors/mtg.png"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
