import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FarmListComponent } from './components/farm-list/farm-list.component';
import { SearchComponent } from './components/search/search.component';
import { FarmDetailComponent } from './components/farm-detail/farm-detail.component';
import { FarmEditComponent } from './components/farm-edit/farm-edit.component';
import { FarmCreateComponent } from './components/farm-create/farm-create.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'login',component:LoginComponent},
  {path:'farm/detail/:id',component:FarmDetailComponent},
  {path:'farm/edit/:id',component:FarmEditComponent},
  {path:'farm/create',component:FarmCreateComponent},
  {path:'farm/list',component:FarmListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
