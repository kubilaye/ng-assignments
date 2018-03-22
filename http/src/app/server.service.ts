import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServersRequest(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      'https://angular-playground-1.firebaseio.com/data.json',
      servers,
      {headers: headers}
    );
  }

}
