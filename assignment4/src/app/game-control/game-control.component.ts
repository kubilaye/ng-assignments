import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() countEvent = new EventEmitter<number>();
  event: Timer;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartPressed() {
    this.event = setInterval(() => {
      this.countEvent.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onStopPressed() {
    clearInterval(this.event);
  }

}
