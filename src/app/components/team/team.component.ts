import { Component, OnInit } from '@angular/core';
import { PlayersServiceService } from "../../services/players-service.service";
import { take } from 'rxjs/operators';

@Component({
  selector: '[app-team]',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public players = [];
  public currentDescription:string;
  public currentNickname:string;

  constructor(private _playerService: PlayersServiceService) {
  }

  ngOnInit() {
    this._playerService.getPlayers().pipe(
      take(1)
    ).subscribe((res:any) => {
      this.players = res.playersList;
      this.currentDescription = this.players[0].desc;
      this.currentNickname = this.players[0].nickname;
    })
  }

}
