import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courceira',
  templateUrl: './courceira.page.html',
  styleUrls: ['./courceira.page.scss'],
})
export class CourceiraPage implements OnInit {
  listCategory:any;
  constructor(private http:HttpClient,private router:Router) {
    this.http.post("http://localhost/learnify/getCategory.php",null).subscribe(res=>{
      this.listCategory=res;
    })
   }

  ngOnInit() {
  }
  goToDetail(obj:any){
    this.router.navigate(['/corseriar/detail',obj])
  }
  del(index){
    this.http.post('http://localhost/learnify/delCategory.php',{id:this.listCategory[index]['id']}).subscribe(res=>{
      console.log(res);
    this.listCategory.splice(index,1)

    }
    
    )

  }

}
