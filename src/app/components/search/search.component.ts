import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder,private http: HttpClient,private router:Router) { }

  searchForm: FormGroup
  allFarm
  farmList
  farmForShow = []

  totalData = 0

  ngOnInit(): void {
    this.listFarm();
    this.searchForm = this.fb.group({
      farmName: '',
      area:'',
      numberOfCow: 0,
      address:''
    });
  }

  searchFarm(){
    this.farmList = this.allFarm
    let dataFilter = []
   if(this.searchForm.get('farmName').value){
      for(let i=0;i<this.farmList.length;i++){
        if(this.farmList[i].farmName.includes(this.searchForm.get('farmName').value)){
          dataFilter.push(this.farmList[i])        }
      }
      this.farmList = dataFilter
      dataFilter=[]
    }

    if(this.searchForm.get('address').value){
      for(let i=0;i<this.farmList.length;i++){
        if(this.farmList[i].address.includes(this.searchForm.get('address').value)){
          dataFilter.push(this.farmList[i])        }
      }
      this.farmList = dataFilter
      dataFilter=[]
    }

    if(this.searchForm.get('numberOfCow').value){
      for(let i=0;i<this.farmList.length;i++){
        if(this.farmList[i].numberOfCow >= this.searchForm.get('numberOfCow').value){
          dataFilter.push(this.farmList[i])        }
      }
      this.farmList = dataFilter
      dataFilter=[]
    }

    this.totalData = this.farmList.length
    this.setDataForShow(0)
  }

  clearSearch(){
    this.searchForm.setValue({
      farmName: '',
      area:'',
      numberOfCow: 0,
      address:''
    })
    this.farmList = this.allFarm
  }

  setDataForShow(index){
    this.farmForShow = []
    for(let i = 0;i<10&&i+index<this.farmList.length;i++){
      this.farmForShow.push(this.farmList[i+index])
    }
  }

  listFarm() {
    this.http
      .get('http://localhost:5500/api/farm')
      .toPromise()
      .then((res) => {
        if (res) {
          console.log(res);
          this.farmList = res;
          this.allFarm = res
          this.totalData = this.farmList.length
          this.setDataForShow(0)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  paginate(event){
    console.log(event)
    this.setDataForShow(event.first)
  }

  goToDetail(farm){
    console.log(farm)
    let url = '/farm/detail/' + farm._id;
    this.router.navigate([url]);
  }

}
