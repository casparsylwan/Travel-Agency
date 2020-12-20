import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderCompletationComponent } from './order-completation/order-completation.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { DestinationComponent } from './destination/destination.component';
import { SeatsComponent } from './seats/seats.component';
import { PaymentComponent } from './payment/payment.component';

const routes = [
  {
    path:'',
    component: OrderContainerComponent,
    children: [
      {path: 'destination', component: DestinationComponent},
      {path: 'seats', component: SeatsComponent},
      {path: 'payment', component: PaymentComponent}
    ]
  }
]


@NgModule({
  declarations: [OrderCompletationComponent, OrderContainerComponent, DestinationComponent, SeatsComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
