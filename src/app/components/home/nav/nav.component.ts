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
  public is_a_clicked = false;

  constructor() { }

  ngOnInit() {
  }

  expandList() {
    this.isMenuClicked = !this.isMenuClicked;
    this.menuEvent.emit(this.isMenuClicked);
  }

  onClick() {
    this.is_a_clicked = true;
    console.log(this.is_a_clicked);
    setTimeout(() => {
      this.is_a_clicked = false;
      console.log(this.is_a_clicked);
    }, 500);
  }
}
