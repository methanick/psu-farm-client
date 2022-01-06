import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  id
  farm

  constructor(private http: HttpClient,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.params
    console.log(this.id._value.id)
    if(this.id){
      this.loadFarm()
    }
  }

  loadFarm() {
    this.http
      .get('http://psu-farm-server.herokuapp.com/api/farm/'+this.id._value.id)
      .toPromise()
      .then((res) => {
        if (res) {
          console.log(res);
          this.farm = res;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
