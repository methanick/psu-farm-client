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
    console.log("loginnnnn")
    console.log(this.username)
    console.log(this.password)
    if(this.username == "admin" && this.password == "admin@2021"){
      this.router.navigate(['/farm/list'])
    }else{
      Swal.fire(
        'แจ้งเตือน',
        'USERNAME หรือ PASSWORD ไม่ถูกต้อง',
        'error'
      )
    }
  }
}
