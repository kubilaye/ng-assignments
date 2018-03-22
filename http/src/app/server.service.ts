import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServersRequest(servers: any[]) {
    return this.http.post(
      'https://angular-playground-1.firebaseio.com/data.json',
      servers
    );
  }

}
