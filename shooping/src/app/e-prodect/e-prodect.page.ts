import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-e-prodect',
  templateUrl: './e-prodect.page.html',
  styleUrls: ['./e-prodect.page.scss'],
})
export class EProdectPage implements OnInit {
  showSplash =true;
  listProduct:any;
  constructor(private http:HttpClient,private router:Router) {
    this.http.post("http://localhost/learnify/e/getProduct.php",null).subscribe(res=>{
      this.listProduct=res;
    })
   }

  ngOnInit() {
    timer(1000).subscribe(() => this.showSplash =false)

  }
  // goToDetail(obj:any){
  //   this.router.navigate(['/corseriar/detail',obj])
  // }
  update(obj:any){
    this.router.navigate(['/update-product',obj])
  }
  del(index){
    this.http.post('http://localhost/learnify/e/delProduct.php',{id:this.listProduct[index]['id']}).subscribe(res=>{
      console.log(res);
    this.listProduct.splice(index,1)

    }
    
    )

  }


}
