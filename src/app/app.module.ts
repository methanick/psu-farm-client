import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { FarmListComponent } from './components/farm-list/farm-list.component';
import { SearchComponent } from './components/search/search.component';
import { FarmDetailComponent } from './components/farm-detail/farm-detail.component';
import { FarmEditComponent } from './components/farm-edit/farm-edit.component';
import { FarmCreateComponent } from './components/farm-create/farm-create.component';
import { LoginComponent } from './components/login/login.component';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {GMapModule} from 'primeng/gmap';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FarmListComponent,
    SearchComponent,
    FarmDetailComponent,
    FarmEditComponent,
    FarmCreateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    HttpClientModule,
    GMapModule,
    PaginatorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSxQItpddB64QqM3i47x-C3nOJ9OUvlAk',
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
