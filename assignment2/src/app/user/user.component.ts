import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = '';
  enableButton = false;

  constructor() { }

  ngOnInit() {
  }

  onInputChange(event: any) {
    this.enableButton = !((<HTMLInputElement>event.target).value === '');
  }

  onButtonClick() {
    this.username = '';
    this.enableButton = false;
  }

}
