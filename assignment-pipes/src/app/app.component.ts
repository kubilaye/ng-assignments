import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    'space',
    'taylor',
    'juno',
    'monkey',
    'glasses',
    'texture',
  ];
  dataObjects = [
    {name: 'Kate', age: 12},
    {name: 'Adam', age: 4},
    {name: 'Beth', age: 21},
    {name: 'Gary', age: 15},
    {name: 'Simon', age: 19},
    {name: 'Dan', age: 29},
  ];
}
