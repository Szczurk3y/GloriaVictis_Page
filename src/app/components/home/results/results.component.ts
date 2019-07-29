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
      path: "../../../../assets/home/results/rectangle.png"
    },
    {
      name: "result2",
      path: "../../../../assets/home/results/rectangle.png"
    },
    {
      name: "result3",
      path: "../../../../assets/home/results/rectangle.png"
    },
    {
      name: "result4",
      path: "../../../../assets/home/results/rectangle.png"
    },
    {
      name: "result5",
      path: "../../../../assets/home/results/rectangle.png"
    },
    {
      name: "result6",
      path: "../../../../assets/home/results/rectangle.png"
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
