import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zero',
  templateUrl: './zero.page.html',
  styleUrls: ['./zero.page.scss'],
})
export class ZeroPage implements OnInit {
  form:any;
  file:any;
  f:any;
  // listCategory:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { 
    this.f=this.fb.group({
      title:new FormControl(''),
      des:new FormControl(''),
    })
    // this.http.post("http://localhost/learnify/getCategory.php",null).subscribe(res=>{
    //   this.listCategory=res;
    // })
  }

  ngOnInit() {
    this.form=this.fb.group({
      email: new FormControl(""),
      name: new FormControl(""),
      password: new FormControl(""),
    })
  } 
 
  
submitPost(){
  this.http.post('http://localhost/learnify/users/add.php',this.form.value)
  .subscribe(res=>
{
  alert('created don')
},err=>{

  alert('some one error ')
})

}
submitLogin(){
  this.http.post('http://localhost/learnify/users/login.php',this.form.value).subscribe(res=>
{
  alert(res['message'])
})

}

upload_image(event:any){
   const input = event.target;
    this.file = input.files[0];

}
submit(){

  let reqData=new FormData()
  reqData.append('img',this.file)
  reqData.append('title',this.f.value.title)
  reqData.append('des',this.f.value.des)

  console.log(reqData)
  this.http.post('http://localhost/learnify/addCategory.php',reqData).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/corseriar'])
  }
  
  )
}
goToDetail(){
  this.router.navigate(['/corseriar/detail'])
}
}