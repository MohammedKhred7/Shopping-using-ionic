import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent  implements OnInit {
 
  form:any;
  file:any;
  constructor(private fb:FormBuilder,private http:HttpClient ,private router:Router) {
    this.form=this.fb.group({
      title:new FormControl(''),
      des:new FormControl(''),
    })
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
    reqData.append('des',this.form.value.des)

    console.log(reqData)
    this.http.post('http://localhost/learnify/addCategory.php',reqData).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/corseriar'])
    }
    
    )

  }

}