import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } 
      from '@angular/animations';

@Component({
  selector: '[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  aOnClick() {
    document.write("ELO");
  }

}
