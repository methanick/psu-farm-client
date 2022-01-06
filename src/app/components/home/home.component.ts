import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  farmList: any = [];
  farmForShow: any = [];
  totalFarm = 0;

  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
    this.listFarm();
  }

  listFarm() {
    this.http
      .get('https://psu-farm-server.herokuapp.com/api/farm')
      .toPromise()
      .then((res) => {
        if (res) {
          console.log(res);
          this.farmList = res;
          this.totalFarm = this.farmList.length;
          if (this.totalFarm < 3) {
            this.farmForShow = this.farmList;
          } else {
            this.farmForShow.push(this.farmList[this.totalFarm - 1]);
            this.farmForShow.push(this.farmList[this.totalFarm - 2]);
            this.farmForShow.push(this.farmList[this.totalFarm - 3]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  goToDetail(farm){
    console.log(farm)
    let url = '/farm/detail/' + farm._id;
    this.router.navigate([url]);
  }
}
