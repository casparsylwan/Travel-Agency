import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderCompletationComponent } from './order-completation/order-completation.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { DestinationComponent } from './destination/destination.component';
import { SeatsComponent } from './seats/seats.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatComponent } from './seat/seat.component';

console.log("3. bookingmodule");

const routes = [
  {
    path:'',
    component: OrderContainerComponent,
    children: [
      {path: 'destination', component: DestinationComponent,
       data: { animationState: 'One' }
    },
      {path: 'seats', component: SeatsComponent,
       data: { animationState: 'Two' }
    },
      {path: 'payment', component: PaymentComponent,
       data: { animationState: 'Three' }
    }
    ]
  }
]


@NgModule({
  declarations: [OrderCompletationComponent, OrderContainerComponent, DestinationComponent, SeatsComponent, PaymentComponent, SeatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
