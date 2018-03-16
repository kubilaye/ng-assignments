import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Bob', 'Steve'];

  onSetToInactive(index: number) {
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
  }

  onSetToActive(index: number) {
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
  }

}
