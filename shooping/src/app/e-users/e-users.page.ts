import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-e-users',
  templateUrl: './e-users.page.html',
  styleUrls: ['./e-users.page.scss'],
})
export class EUsersPage implements OnInit {
  showSplash =true;
  listUsers:any;
  constructor(private http:HttpClient) {
    this.http.post("http://localhost/learnify/e/getUsers.php",null).subscribe(res=>{
      this. listUsers=res;
    })
   }

  ngOnInit() {
    timer(1000).subscribe(() => this.showSplash =false)

  }
  // goToDetail(obj:any){
  //   this.router.navigate(['/corseriar/detail',obj])
  // }
  // update(obj:any){
  //   this.router.navigate(['/update-product',obj])
  // }
  del(index){
    this.http.post('http://localhost/learnify/e/DeleteUser.php',{id:this. listUsers[index]['id']}).subscribe(res=>{
      console.log(res);
    this.listUsers.splice(index,1)

    }
    
    )

  }

}
