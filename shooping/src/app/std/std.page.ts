import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-std',
  templateUrl: './std.page.html',
  styleUrls: ['./std.page.scss'],
})
export class StdPage implements OnInit {
  obj:any
  file:any;
  constructor(private activateRoute:ActivatedRoute,private http:HttpClient) {
   // this.obj=this.activateRoute.snapshot.params
   }

  ngOnInit() {
   this.obj=this.activateRoute.snapshot.params
  }
  onChangeFun(event){
      const input = event.target;
        this.file = input.files[0];

  }
  upload_image(){
    const formData=new FormData();
    formData.append('logo',this.file);
 
    this.http.post('http://localhost/learnify/upload_image.php',formData).subscribe(res=>{
      console.log(res)
    })


  }
  
}
