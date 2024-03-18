import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { firstpagenavComponent } from './firstpagenav/firstpagenav.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: firstpagenavComponent},
  {path: 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
