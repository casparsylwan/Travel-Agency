import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

console.log("2. module");

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'booking', loadChildren: './booking/booking.module#BookingModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
