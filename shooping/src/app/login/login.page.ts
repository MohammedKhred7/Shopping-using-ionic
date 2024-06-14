import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 form:any;
  constructor(private fb:FormBuilder,private http:HttpClient) { }

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
}
