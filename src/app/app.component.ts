import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Farm PSU';
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
        {label: 'หน้าแรก', icon: 'pi pi-fw pi-home'},
        {label: 'ค้นหาฟาร์ม', icon: 'pi pi-fw pi-search'}

    ];

    this.activeItem = this.items[0];
}

}
