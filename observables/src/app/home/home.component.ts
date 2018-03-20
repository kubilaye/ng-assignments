import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription'; // .interval()
// import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    /*
    const myNumbers = Observable.interval(1000);
      myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    */

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        const rand = Math.floor(Math.random() * 100) + 1 ;
        if (rand % 2 === 0) {
          setTimeout(() => {
            observer.error('first error');
          }, 5000);
        } else {
          setTimeout(() => {
            observer.complete();
          }, 5000);
        }
        // never happens:
        setTimeout(() => {
          observer.next('second package');
        }, 6000);
        // //
      }
    );
    this.myObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.myObservableSubscription.unsubscribe();
  }

}
