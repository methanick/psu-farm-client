import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css'],
})
export class FarmListComponent implements OnInit {
  farmList: any = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listFarm();
  }

  listFarm() {
    this.http
      .get('https://psu-farm-server.herokuapp.com/api/farm')
      .toPromise()
      .then((res:any) => {
        if (res) {
          console.log(res);
          this.farmList = res.reverse();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteFarm(data) {
    console.log(data);
    Swal.fire({
      title: 'คุณต้องการลบข้อมูลชุดนี้?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Cancle`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let path = 'https://psu-farm-server.herokuapp.com/api/farm/' + data._id;
        let token = 'Bearer' + ' ' + sessionStorage.getItem('token');
        console.log(token);
        this.http
          .delete(path, {
            headers: {
              authorization: token,
            },
          })
          .toPromise()
          .then((res) => {
            console.log(res);
            this.listFarm();
            Swal.fire('ลบข้อมูลเรียบร้อย!', '', 'success');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  goToEdit(farm) {
    console.log(farm);
    let url = '/farm/edit/' + farm._id;
    this.router.navigate([url]);
  }
}
