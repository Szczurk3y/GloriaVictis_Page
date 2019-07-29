import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material';

@Component({
  selector: '[app-home-middle-buttons]',
  templateUrl: './home-middle-buttons.component.html',
  styleUrls: ['./home-middle-buttons.component.scss']
})
export class HomeMiddleButtonsComponent implements OnInit {

  @Output("buttonEvent") buttonEvent = new EventEmitter<number>();

  public buttons = [true, false, false];

  constructor() {
    
  }

  ngOnInit() {
  }

  onClick(index1: number, index2: number, index3: number) {
    this.buttons[index1] = true;
    this.buttons[index2] = false;
    this.buttons[index3] = false;
  }

}
