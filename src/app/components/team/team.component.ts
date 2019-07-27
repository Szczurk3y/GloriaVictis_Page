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
      nickname: "Szczurk3y",
      description: "Siema jestem Szczurk3y",
      picture: "../../../assets/team/players/simple.png"
    },
    {
      nickname: "Głazu",
      description: "Siema jestem Głazu",
      picture: "../../../assets/team/players/simple.png"
    },
    {
      nickname: "Kubuś",
      description: "Siema jestem Kubuś",
      picture: "../../../assets/team/players/simple.png"
    },
    {
      nickname: "franeklubi",
      description: "Siema jestem franeklubi",
      picture: "../../../assets/team/players/simple.png"
    },
    {
      nickname: "kowadło",
      description: "Siema jestem kowadło",
      picture: "../../../assets/team/players/simple.png"
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
