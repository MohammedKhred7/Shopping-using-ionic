import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { timer } from 'rxjs';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-e-home',
  templateUrl: './e-home.page.html',
  styleUrls: ['./e-home.page.scss'],
})
export class EHomePage implements OnInit {
  number:any
  showSplash =true;
  swiperModules = [IonicSlides];

  listCategory:any;
  listProduct:any;
  constructor(private http:HttpClient,private router:Router) {
    this.http.post("http://localhost/learnify/e/getCategory.php",null).subscribe(res=>{
      this.listCategory=res;
    }),

   this.http.post("http://localhost/learnify/e/getProduct.php",null).subscribe(res=>{
        this.listProduct=res;
      })
   }
  ngOnInit() {
    this.number= 0;
    timer(3000).subscribe(() => this.showSplash =false)
  
  }

  counter(){
    this.number++;
  }
}
