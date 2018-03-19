import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Bob', 'Steve'];

  constructor(private counterService: CounterService) { }

  setToActive(index: number) {
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInactive(index: number) {
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
    this.counterService.incrementActiveToInactive();
  }

}
