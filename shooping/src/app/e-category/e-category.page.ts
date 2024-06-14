import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-e-category',
  templateUrl: './e-category.page.html',
  styleUrls: ['./e-category.page.scss'],
})
export class ECategoryPage implements OnInit {
  showSplash =true;
  listCategory:any;
  constructor(private http:HttpClient,private router:Router) {
    this.http.post("http://localhost/learnify/e/getCategory.php",null).subscribe(res=>{
      this.listCategory=res;
    })
   }

  ngOnInit() {
    timer(1000).subscribe(() => this.showSplash =false)

  }
  // goToDetail(obj:any){
  //   this.router.navigate(['/corseriar/detail',obj])
  // }
  update(obj:any){
    this.router.navigate(['/update-category',obj])
  }
  del(index){
    this.http.post('http://localhost/learnify/e/delCategory.php',{id:this.listCategory[index]['id']}).subscribe(res=>{
      console.log(res);
    this.listCategory.splice(index,1)

    }
    
    )

  }
}
