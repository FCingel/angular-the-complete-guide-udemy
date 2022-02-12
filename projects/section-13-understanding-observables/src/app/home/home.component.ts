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

    const customIntervalObservable = new Observable(observer => {      // observer is the listener. We tell it about new data, new errors, or the observable being completed.
      let count = 0;
      setInterval(() => {
        observer.next(count);     // observer.next() emits a new value

        if (count === 2) {
          observer.complete();      // observable stops emitting. No need to unsubscribe anymore.
        }

        // faking an error since setInterval won't fail
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));      // whenever an observable throws an error, it stops emitting. No need to unsubscribe anymore.
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();      // whenever we leave this component, we clear this subscription
  }
}
