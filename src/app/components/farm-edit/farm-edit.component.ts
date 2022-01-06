import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

interface Coordinate {
  lat: number;
  lng: number;
}


@Component({
  selector: 'app-farm-edit',
  templateUrl: './farm-edit.component.html',
  styleUrls: ['./farm-edit.component.css']
})
export class FarmEditComponent implements OnInit {

  farmForm: FormGroup;
  farm
  id

  options;
  overlays;
  token = '122344445'

  lat: 36.890257;
  lng: 30.707417;

  coordinate: Coordinate = { lat: 13.75, lng: 100.51 };

  constructor(private fb: FormBuilder,private http: HttpClient,private router:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.farmForm = this.fb.group({
      farmName: '',
      description: '',
      numberOfCow: 0,
      address: '',
      ownerName: '',
      phone: '',
      area: '',
      lat: '',
      lng: '',
    });
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
          this.setForm(res)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setForm(data){
    this.farmForm = this.fb.group({
      farmName: data.farmName,
      description: data.description,
      numberOfCow: data.numberOfCow,
      address: data.address,
      ownerName: data.ownerName,
      phone: data.phone,
      area: data.area,
      lat: data.lat,
      lng: data.lng,
    });
  }

  // farmData(){
  //   return this.farmForm.value
  // }

  onSubmit(farmForm) {
    console.log(farmForm.value);
    let data = farmForm.value

    let token = 'Bearer'+' '+sessionStorage.getItem('token')
    console.log(token)

    if(data.farmName){
      this.http.put('http://psu-farm-server.herokuapp.com/api/farm/'+this.id._value.id,data,{
        headers:{
          authorization:token
        }
      }).toPromise().then(res=>{
        console.log(res)
        this.router.navigate(['/farm/list'])


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
        'กรุณากรอก ชื่อฟาร์ม',
        'error'
      )
    }
  }

  markerDragEnd($event) {
    this.farmForm.controls['lat'].setValue($event.latLng.lat())
    this.farmForm.controls['lng'].setValue($event.latLng.lng())
  }

}
