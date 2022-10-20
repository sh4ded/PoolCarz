import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  ride!: any[];
  isBooked:boolean = false;
  bookButtonMsg:string = "Book!";
  bookingId!:number;


  constructor() { }

  ngOnInit(): void {
  }

  @Input() set setRide(ride:any[]) {
    this.ride = ride;
  }

  @Output() registerClick = new EventEmitter<boolean>();

  register() {
    this.registerClick.emit(false);
  }
  
  Book() {
    this.isBooked = true;
    this.bookButtonMsg = "Cancel Booked Ride";
    this.bookingId = Math.ceil(Math.random() * 1000);
  }

  

}
