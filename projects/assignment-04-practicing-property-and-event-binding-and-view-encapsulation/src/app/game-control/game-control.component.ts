import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalOccurred = new EventEmitter<number>();
  interval: any;
  emittedNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
    this.emittedNumber++;
      this.intervalOccurred.emit(this.emittedNumber); 
    }, 1000);
  }

  onPauseGame() {
      clearInterval(this.interval);
  }
}
