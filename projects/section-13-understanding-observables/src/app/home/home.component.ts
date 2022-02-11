import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;     // store our subscription so that we can unsubscribe later and avoid memory leaks

  constructor() { }

  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe(count => {     // similar to setInterval() where you pass in a number in ms and will fire an event every time that # of ms passes
      console.log(count);
    });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();      // whenever we leave this component, we clear this subscription
  }
}
