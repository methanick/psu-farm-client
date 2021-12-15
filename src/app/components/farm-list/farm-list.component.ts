import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css'],
})
export class FarmListComponent implements OnInit {
  farmList: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listFarm();
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
