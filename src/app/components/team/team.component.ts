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

  public players = [];
  public playersPicture = [];
  public currentDescription: string;
  public currentNickname: string;
  public currentLeftSidePicture: string;
  public currentRightSidePicture: string;
  public currentPrimaryPicture: string;
  public i: number = 1;

  constructor(private _playerService: PlayersServiceService) {
  }

  ngOnInit() {
    this.playersPicture.push("../../../assets/team/players/stewie2k.png");
    this.playersPicture.push("../../../assets/team/players/neo.png");
    this.playersPicture.push("../../../assets/team/players/simple.png");
    this.playersPicture.push("../../../assets/team/players/pashabiceps.png");
    this.playersPicture.push("../../../assets/team/players/device.png");

    this._playerService.getPlayers().pipe(
      take(1)
    ).subscribe((res:any) => {
      this.players = res.playersList;
      this.currentDescription = this.players[0].desc;
      this.currentNickname = this.players[0].nickname;   
    })
    this.currentPrimaryPicture = this.playersPicture[1];
  }

  onArrowLeftClick() {
    this.i--;
  }

  onArrowRightClick() {
    this.i++;
  }

  abs(n: number): number {
    return Math.abs(n)
  }
}
