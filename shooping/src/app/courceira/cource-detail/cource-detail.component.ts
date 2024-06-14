import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cource-detail',
  templateUrl: './cource-detail.component.html',
  styleUrls: ['./cource-detail.component.scss'],
})
export class CourceDetailComponent  implements OnInit {

  obj:any;
  listVedio;  
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) {
    this.obj=this.activatedRoute.snapshot.params;
    this.http.post("http://localhost/learnify/getVedio.php",{id:this.obj.id}) .subscribe(res=>{
      this.listVedio=res;
    })
   }

  ngOnInit() {
  }

}
