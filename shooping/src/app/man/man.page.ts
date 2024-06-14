
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-man',
  templateUrl: './man.page.html',
  styleUrls: ['./man.page.scss'],
})
export class ManPage implements OnInit {
  number:any

  listCategory:any;
  listProduct:any;
  constructor(private http:HttpClient) {

   this.http.post("http://localhost/learnify/e/getProduct.php",null).subscribe(res=>{
        this.listProduct=res;
      })
   }
  ngOnInit() {
    this.number= 0;
  }

  counter(){
    this.number++;
  }
}
