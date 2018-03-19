export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Bob', 'Steve'];

  setToActive(index: number) {
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
  }

  setToInactive(index: number) {
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
  }

}
