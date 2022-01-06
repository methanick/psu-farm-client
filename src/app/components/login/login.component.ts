import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username:any
  password:any
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {

  }
// Swal.fire('Good job!', 'You clicked the button!', 'error');
  login() {
    if(this.username && this.password){
      let data = {
        username:this.username,
        password:this.password
      }
      this.http.post('https://psu-farm-server.herokuapp.com/api/login',data).toPromise().then((res:any)=>{
        console.log(res)
        this.setSessionToken(res)
      }).catch(err=>{
        console.log(err)
        Swal.fire(
          'แจ้งเตือน',
          err.error.error,
          'error'
        )
      })
    }else{
      Swal.fire(
        'แจ้งเตือน',
        'USERNAME หรือ PASSWORD ไม่ถูกต้อง',
        'error'
      )
    }


  }

  setSessionToken(data){
    sessionStorage.setItem("token",data.token)
    sessionStorage.setItem("username",data.username)
    this.router.navigate(['/farm/list'])
  }


}
