import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  isShow = false;
  option!:string;
  selectedRide!:any[];
  rides = [
    {
      "id": 1,
      "offerId": "qwerty",
      "name": "Fasttrack",
      "car": "Innova",
      "seatsLeft": 3,
      "pickUp": "Vanrose Junction",
      "destination": "Office"
  },
  {
      "id": 2,
      "offerId": "kwerty",
      "name": "Fasttrack",
      "car": "Innova",
      "seatsLeft": 2,
      "pickUp": "PTP",
      "destination": "Office"
  },
  {
      "id": 3,
      "offerId": "twerty",
      "name": "Fasttrack",
      "car": "Innova",
      "seatsLeft": 7,
      "pickUp": "Office",
      "destination": "East-Fort"
  },
  {
      "id": 4,
      "offerId": "pwerty",
      "name": "Fasttrack",
      "car": "Innova",
      "seatsLeft": 5,
      "pickUp": "Office",
      "destination": "Central Mail"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onChange(option:string) {
    this.option = option;
  }

  selectRide(id:number) {
    this.selectedRide = this.rides.filter(x => x.id === id);
  }

  setBook(book: boolean) {
    this.isShow = book;
  }
}
