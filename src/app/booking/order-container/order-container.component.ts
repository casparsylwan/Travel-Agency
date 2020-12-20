import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../route-transition-animations';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  animations: [routeTransitionAnimations]
})
export class OrderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("4. bookingcontainer");
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }

}
