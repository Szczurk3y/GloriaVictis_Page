import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersServiceService {

  constructor(private http: HttpClient) { }

  players = {
    playersList: [
        {
            nickname: "Szczurk3y",
            desc: "Eget mi proin sed libero enim sed. Ut morbi tincidunt augue interdum velit. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Vel quam elementum pulvinar etiam non quam. Dolor morbi non arcu risu"            
        },
        {
            nickname: "Glazu",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Magna fermentum iaculis eu non diam phasellus vestibulum"            
        }
    ]
  }

  public getPlayers() {
    const playersObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.players);
      }, 1000);
    });

    return playersObservable

  }
}
