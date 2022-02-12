import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;     // store our subscription so that we can unsubscribe later and avoid memory leaks

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {     // similar to setInterval() where you pass in a number in ms and will fire an event every time that # of ms passes
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {      // observer is the listener. We tell it about new data, new errors, or the observable being completed.
      let count = 0;
      setInterval(() => {
        observer.next(count);     // observer.next() emits a new value. observer.error() is used to throw an error. observer.complete() lets observer know you are done.
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
      
    });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();      // whenever we leave this component, we clear this subscription
  }
}
