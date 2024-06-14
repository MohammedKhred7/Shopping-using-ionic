import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-e-login',
  templateUrl: './e-login.page.html',
  styleUrls: ['./e-login.page.scss'],
})
export class ELoginPage implements OnInit {
  showSplash =true;
  form:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { 

    }

  ngOnInit() {
    timer(6000).subscribe(() => this.showSplash =false),
    this.form=this.fb.group({
      email: new FormControl(""),
      password: new FormControl(""),
    })
    
  }
  submitLogin(){
    this.http.post('http://localhost/learnify/e/login.php',this.form.value).subscribe(res=>
  {
    alert(res['message'])
    if(res['state']== true){
      if(this.form.value.email == 'admin' && this.form.value.password == 'admin'){
        this.router.navigate(['/admin'])
      }
      else{
        this.router.navigate(['/e-home'])
      }
    }
  })

 
  
  }
}
