import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() location!:{address:string, city:string, country:string; }

}
