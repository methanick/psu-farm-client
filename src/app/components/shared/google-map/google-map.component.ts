// Note :This Component will return position: {lat, lng} when click on map

import { MapsAPILoader } from '@agm/core'
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'

interface Coordinate {
  lat: number
  lng: number
}
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {
  @Input()
  coordinate: Coordinate
  @Input() hasAutoComplete = true

  @Output() googleMapChange = new EventEmitter<any>()

  @ViewChild('search')
  public searchElementRef: ElementRef

  constructor(private mapsAPILoader: MapsAPILoader, private zone: NgZone) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement
      )
      // Set the data fields to return when the user selects a place.
      autocomplete.setFields([
        'address_component',
        'adr_address',
        'business_status',
        'formatted_address',
        'geometry',
        'icon',
        'name',
        'photo',
        'place_id',
        'plus_code',
        'type',
        'url',
        'vicinity',
      ])
      autocomplete.addListener('place_changed', () => {
        this.zone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace()

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return
          }

          // set latitude, longitude and zoom
          this.updateGps(
            place.geometry.location.lat(),
            place.geometry.location.lng()
          )
        })
      })
    })
  }

  markerDragEnd($event) {
    this.updateGps($event.latLng.lat(), $event.latLng.lng())
  }

  updateGps(lat, lng) {
    this.googleMapChange.emit({
      position: {
        lat,
        lng,
      },
    })
  }
}
