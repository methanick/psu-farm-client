import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked,AfterViewInit{
  title = 'Farm PSU';
  items: MenuItem[];
  activeItem: MenuItem;
  showMenu = false
  showBarIcon = false
  token = null
  isLogin = false

  ngOnInit() {
    this.items = [
        {label: 'หน้าแรก', icon: 'pi pi-fw pi-home'},
        {label: 'ค้นหาฟาร์ม', icon: 'pi pi-fw pi-search'}

    ];

    this.activeItem = this.items[0];
}

public ngAfterViewInit() {
}

ngAfterViewChecked() {
  this.detectScreenSize();
  this.token = sessionStorage.getItem('token')
  if(this.token){
    this.isLogin = true
  }
}
private detectScreenSize() {
  let width = window.innerWidth;
  if(width < 580){
    this.showBarIcon = true
  }

  console.log(width)
}

showMenuBar(){
  console.log("showMenuBar")
  this.showMenu = !this.showMenu
}

logOut(){
  sessionStorage.clear()
  // this.router.navigate(['/farm/list'])
  this.isLogin = false
}

}
