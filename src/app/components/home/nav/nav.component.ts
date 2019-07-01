import { Component, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } 
      from '@angular/animations';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  @Output("menuEvent") menuEvent = new EventEmitter<boolean>();

  public isMenuClicked = false;

  constructor() { }

  ngOnInit() {
  }

  expandList() {
    this.isMenuClicked = !this.isMenuClicked;
    this.menuEvent.emit(this.isMenuClicked);
  }
}
