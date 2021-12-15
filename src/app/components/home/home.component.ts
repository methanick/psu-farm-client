import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  farmList :any = [];

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.listFarm()
  }

  listFarm() {
    this.http
      .get('http://localhost:5500/api/farm')
      .toPromise()
      .then((res) => {
        if (res) {
          console.log(res);
          this.farmList = res;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
