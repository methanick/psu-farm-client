import { MapsAPILoader } from '@agm/core';
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  lat: 36.890257;
  lng: 30.707417;

  coordinate: Coordinate = { lat: 13.75, lng: 100.51 };

  constructor(private fb: FormBuilder) {}

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
    console.log(farmForm);
  }

  markerDragEnd($event) {
    this.farmForm.controls['lat'].setValue($event.latLng.lat())
    this.farmForm.controls['lng'].setValue($event.latLng.lng())
  }
}
