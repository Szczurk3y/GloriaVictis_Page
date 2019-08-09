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

  public results = [
    {
      id: '1',
      info: "We lost a first map against ex-superious gamig in the Elovego Esports Cup tournament",
      path: "../../../../assets/home/results/result1.png",
      isClicked: false
    },
    {
      id: '2',
      info: "Now we won the second map against ex-superious gamig and we have 1:1 map-score during the Elovego Esports Cup tournament",
      path: "../../../../assets/home/results/result2.png",
      isClicked: false
    },
    {
      id: "3",
      info: "The second win in EzLeague tournament, opponent time ended. ^^",
      path: "../../../../assets/home/results/result3.png",
      isClicked: false
    },
    {
      id: '4',
      info: "Close to lose, but fortunelly we'd won. Now it's time for the next stage in Elovego Esports Cup!",
      path: "../../../../assets/home/results/result4.png",
      isClicked: false

    },
    {
      id: '5',
      info: "We weren't scared about strong opponent, so we got the certain win against Pompa Team!",
      path: "../../../../assets/home/results/result5.png",
      isClicked: false

    },
    {
      id: '6',
      info: "The Night Clan did play good, but not enough to win with our strong team. Isn't it a good start in EzLeague tournament season II? :)",
      path: "../../../../assets/home/results/result6.png",
      isClicked: false

    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onClick(index: number) {
    this.results.forEach(element => {
      if (element == this.results[index]) {
        element.isClicked = !element.isClicked;
      } else {
        element.isClicked = false;
      }     
    });
  }
}
