import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-news]',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public images = [];
  public currentImage;
  public i = 1;

  constructor() { }

  ngOnInit() {
    this.images[0] = "../../../../assets/home/bg1.jpg";
    this.images[1] = "../../../../assets/home/bg2.jpg";
    this.images[2] = "../../../../assets/home/team.png";
    this.changeImg();    
    setInterval(()=>{
      this.changeImg();
    }, 8000);
  }

  changeImg(){
    this.i++;
    if (this.i > this.images.length - 1) {
      this.i = 0;
    }
    this.currentImage = this.images[this.i];
  }
}
