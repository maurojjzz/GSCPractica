import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }

  counter = 0;
  @Output() counterEvent = new EventEmitter<number>();

  ngOnInit() {
    setInterval(() => { this.counter++ }, 1000);
  }

  buttonClicked(){
    this.counterEvent.emit(this.counter);
  }

}
