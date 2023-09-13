import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service.js';
import { IEvent } from '../IEvento.js';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  public events!: IEvent[] ;
  
  constructor(private eventoService:EventosService ) { }

  ngOnInit() {
    this.events = this.eventoService.getEvents();
  }

}
