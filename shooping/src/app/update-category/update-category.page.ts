import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute,ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.page.html',
  styleUrls: ['./update-category.page.scss'],
})
export class UpdateCategoryPage implements OnInit {
  obj:any;
  form:FormGroup;
  file:any;
  constructor(private ActivatedRoute:ActivatedRoute,private fb:FormBuilder,private http:HttpClient ,private router:Router) {
    this.obj=this.ActivatedRoute.snapshot.params;
    this.form=this.fb.group({

      title:new FormControl(''),
    })
    this.form.patchValue(this.obj)
   }

  ngOnInit() {
  }
  upload_image(event:any){
     const input = event.target;
      this.file = input.files[0];

  }
  submit(){
  
    let reqData=new FormData()
    reqData.append('img',this.file)
    reqData.append('title',this.form.value.title)
    reqData.append('id',this.obj.id)

    console.log(reqData)
    this.http.post('http://localhost/learnify/e/UpdateCategory.php',reqData).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/e-category'])
    }
    
    )

  }
}
