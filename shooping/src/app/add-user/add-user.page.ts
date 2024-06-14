import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  form:any;
  file:any;
  constructor(private fb:FormBuilder,private http:HttpClient ,private router:Router) {
    this.form=this.fb.group({
      Name:new FormControl(''),
      Username:new FormControl(''),
      Des:new FormControl(''),
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
    reqData.append('Img',this.file)
    reqData.append('Name',this.form.value.Name)
    reqData.append('Username',this.form.value.Username)
    reqData.append('Des',this.form.value.Des)

    console.log(reqData)
    this.http.post('http://localhost/learnify/mohammed/addNewUser.php',reqData).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/twitter'])
    }
    
    )

  }

}
