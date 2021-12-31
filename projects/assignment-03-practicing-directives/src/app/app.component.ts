import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPara = true;
  // numClicks: number[] = [];
  numClicks: Date[] = [];
  // increment = 1;

  togglePara() {
    this.displayPara = !this.displayPara;
    // this.numClicks.push(this.increment);
    // this.increment++;
    this.numClicks.push(new Date);
  }

  setBackground(num: number) {
    // return num >= 5 ? 'darkblue' : 'transparent';
    return num >= 4 ? 'darkblue' : 'transparent';
  }
}