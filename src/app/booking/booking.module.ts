import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCompletationComponent } from './order-completation/order-completation.component';
import { RouterModule } from '@angular/router';
import { OrderContainerComponent } from './order-container/order-container.component';

const routes = [
  {
    path:'',
    component: OrderCompletationComponent
  }
]


@NgModule({
  declarations: [OrderCompletationComponent, OrderContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
