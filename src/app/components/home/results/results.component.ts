import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: '[app-results]',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
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
