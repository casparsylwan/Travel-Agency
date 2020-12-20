import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/models/seat';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  seats:Seat[] = [];
  windowLeft:Seat[];
  aisle:Seat[];
  windowRight:Seat[];

  constructor() { }

  ngOnInit(): void {

     this.generateSeats(42);
     this.rowSorter();

  }

  numberOfRows(seats:number)
  {

  }

  generateSeats( planeSize:number )
  {
    for(let i=0; i<planeSize; i++)
    {
      let seat:Seat = new Seat(i, i%7);
      this.seats.push(seat)
      
    }
  }

  rowSorter()
  {
      this.windowLeft = this.seats.filter(
        seat => seat.seatPlacment === 0 || 
                seat.seatPlacment === 1                        
        );

      this.aisle = this.seats.filter(
        seat => seat.seatPlacment === 2 || 
                seat.seatPlacment === 3 ||
                seat.seatPlacment === 4
      )

      this.windowRight = this.seats.filter(
        seat => seat.seatPlacment === 5 || 
                seat.seatPlacment === 6
      )
  }


}
