import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  slides =[
    {'img':'assets/images/ss.png','title':'Teaching','des':'our service are working on other our service are working on other'},
    {'img':'assets/images/ss.png','title':'Training','des':'our service are working on other our service are working on other'},
    {'img':'assets/images/ss.png','title':'Test','des':'our service are working on other our service are working on other'}
  ]

  constructor() { }

  slidesDidLoad(slides: any): void {
    slides.startAutoplay();
  }

ngOnInit(){}
}


