import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {
  stds=[
    {id:2,name:'khaled',age:22},
    {id:3,name:'ali',age:20},
    {id:4,name:'omer',age:24},
    {id:5,name:'saeed',age:25},
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigate(['/home'])
  }
  goToStdDetail(object){
    this.router.navigate(['/std',object])
  }
}
