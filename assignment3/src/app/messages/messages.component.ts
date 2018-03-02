import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  buttonClicked = false;
  clickCount = 0;
  clickLogs = [];

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.clickCount++;
    this.clickLogs.push(new Date().toString());
    this.buttonClicked = !this.buttonClicked;
  }

}
