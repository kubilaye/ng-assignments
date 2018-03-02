import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  buttonClicked = false;
  clickCount = 0;
  clickLogs = [ 0 ];

  constructor() {
    this.clickCount = 0;
    this.clickLogs = [];
  }

  ngOnInit() {
  }

  onButtonClick() {
    this.clickCount++;
    this.clickLogs.push(this.clickCount);
    this.buttonClicked = !this.buttonClicked;
  }

}
