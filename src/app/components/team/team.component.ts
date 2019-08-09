import { Component, OnInit } from '@angular/core';
import { PlayersServiceService } from "../../services/players-service.service";
import { take } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: '[app-team]',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public csgoPlayers = [
    {
      nickname: "Player1",
      description: "I am player 1",
      picture: "../../../assets/team/players/player1.png"
    },
    {
      nickname: "Player2",
      description: "I am player 2",
      picture: "../../../assets/team/players/player2.png"
    },
    {
      nickname: "Player3",
      description: "I am player 3",
      picture: "../../../assets/team/players/player3.png"
    },
    {
      nickname: "Player4",
      description: "I am player 4",
      picture: "../../../assets/team/players/player4.png"
    },
    {
      nickname: "Player 5",
      description: "I am player 5",
      picture: "../../../assets/team/players/player5.png"
    },
    {
      nickname: "Coach",
      description: "Hi i am their coach :-)",
      picture: "../../../assets/team/players/coach.png"
    }
  ];
  public lolPlayers = [
    {
      nickname: "Szczurk3y2",
      description: "Siema jestem Szczurk3y2",
      picture: "../../../assets/team/players/stewie2k.png"
    },
    {
      nickname: "Głazu2",
      description: "Siema jestem Głazu2",
      picture: "../../../assets/team/players/stewie2k.png"
    },
    {
      nickname: "Kubuś2",
      description: "Siema jestem Kubuś2",
      picture: "../../../assets/team/players/stewie2k.png"
    },
    {
      nickname: "franeklubi2",
      description: "Siema jestem franeklubi2",
      picture: "../../../assets/team/players/stewie2k.png"
    },
    {
      nickname: "kowadło2",
      description: "Siema jestem kowadło2",
      picture: "../../../assets/team/players/stewie2k.png"
    },
    {
      nickname: "trener2",
      description: "Siema jestem trener2",
      picture: "../../../assets/team/players/stewie2k.png"
    }
  ];
  public currentPlayers = [];
  public currentDescription: string;
  public currentNickname: string;
  public csgoButtonClicked: boolean = true;

  constructor(private _playerService: PlayersServiceService) {
  }

  ngOnInit() {
    this.currentPlayers= this.csgoPlayers;
    this.setDefault();
  }

  onCsgoButtonClick() {
    this.currentPlayers= this.csgoPlayers;
    this.csgoButtonClicked = true;
  }

  onLolButtonClick() {
    this.currentPlayers = this.lolPlayers;
    this.csgoButtonClicked = false;

  }

  div(nick:string, description:string) {
    this.currentNickname = nick;
    this.currentDescription = description;
  }
  setDefault() {
    this.currentDescription = "to show his description";
    this.currentNickname = "click player";
  }
}
