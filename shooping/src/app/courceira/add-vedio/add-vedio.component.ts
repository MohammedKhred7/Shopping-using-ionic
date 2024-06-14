import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-vedio',
  templateUrl: './add-vedio.component.html',
  styleUrls: ['./add-vedio.component.scss'],
})
export class AddVedioComponent  implements OnInit {

  
  file:any;
  obj:any;
  constructor(private fb:FormBuilder,private http:HttpClient ,private router:Router,private activatedRoute:ActivatedRoute) {
    this.obj=this.activatedRoute.snapshot.params;


   }

  ngOnInit() {
  }
  upload_image(event:any){
     const input = event.target;
      this.file = input.files[0];

  }
  submit(){

    let reqData=new FormData()
    reqData.append('video',this.file)
    reqData.append('id',this.obj.id)

    console.log(reqData)
    this.http.post('http://localhost/learnify/addVideo.php',reqData).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/corseriar/detail',this.obj])
    }
    
    )

  }

}
