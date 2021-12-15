// import { GMapModule } from "primeng/gmap";
import { AgmCoreModule } from '@agm/core'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
// import { TranslateModule } from '@ngx-translate/core'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { GoogleMapComponent } from './google-map.component'
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    AgmCoreModule,
    InputTextModule,
  ],
  declarations: [GoogleMapComponent],
  exports: [GoogleMapComponent],
})
export class GoogleMapModule {}
