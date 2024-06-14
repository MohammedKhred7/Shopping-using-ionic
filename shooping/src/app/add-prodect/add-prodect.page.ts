import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prodect',
  templateUrl: './add-prodect.page.html',
  styleUrls: ['./add-prodect.page.scss'],
})
export class AddProdectPage implements OnInit {
  form:any;
  file:any;
  listCategory:any;
  constructor(private fb:FormBuilder,private http:HttpClient ,private router:Router) {
  
      this.http.post("http://localhost/learnify/e/getCategory.php",null).subscribe(res=>{
        this.listCategory=res;
      }),
 
    this.form=this.fb.group({
      name:new FormControl(''),
      price:new FormControl(''),
      
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
    reqData.append('name',this.form.value.name)
    reqData.append('price',this.form.value.price)
    reqData.append('img',this.file)
   

    console.log(reqData)
    this.http.post('http://localhost/learnify/e/addProduct.php',reqData).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/e-prodect'])
    }
    
    )

  }
}
