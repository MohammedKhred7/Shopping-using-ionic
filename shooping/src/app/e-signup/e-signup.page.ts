import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-signup',
  templateUrl: './e-signup.page.html',
  styleUrls: ['./e-signup.page.scss'],
})
export class ESignupPage implements OnInit {

  form:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.form=this.fb.group({
      email: new FormControl(""),
      name: new FormControl(""),
      password: new FormControl(""),
    })
  } 
submitPost(){
  this.http.post('http://localhost/learnify/e/signup.php',this.form.value)
  .subscribe(res=>
{
  alert(res['message'])
    if(res['state']== true){
    this.router.navigate(['/e-home'])
}
})

}
}