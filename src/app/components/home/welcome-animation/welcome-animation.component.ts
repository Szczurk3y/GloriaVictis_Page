import { Component, OnInit, Input } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: '[app-welcome-animation]',
  templateUrl: './welcome-animation.component.html',
  styleUrls: ['./welcome-animation.component.scss']
})
export class WelcomeAnimationComponent implements OnInit {

  @Input() isMenuClicked: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
