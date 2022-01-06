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
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

interface Coordinate {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.css'],
})
export class FarmCreateComponent implements OnInit {
  farmForm: FormGroup;

  options;
  overlays;
  token = '122344445'

  lat: 36.890257;
  lng: 30.707417;

  coordinate: Coordinate = { lat: 13.75, lng: 100.51 };

  constructor(private fb: FormBuilder,private http: HttpClient,private router:Router) {}

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
      this.http.post('https://psu-farm-server.herokuapp.com/api/farm/create',data,{
        headers:{
          authorization:token
        }
      }).toPromise().then(res=>{
        console.log(res)
        // Swal.fire(
        //   'แจ้งเตือน',
        //   'บันทึกข้อมูลสำเร็จ',
        //   'success'
        // )
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
