import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServersRequest(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      'https://angular-playground-1.firebaseio.com/data',
      servers,
      {headers: headers}
    ).catch(
      (error: Response) => {
        // return Observable.throw(error);
        return Observable.throw('something went wrong');
      }
    );
    return this.http.put( // override the existing data
      'https://angular-playground-1.firebaseio.com/data.json',
      servers,
      {headers: headers}
    );
  }

  getServers() {
    return this.http.get(
      'https://angular-playground-1.firebaseio.com/data.json'
    ).map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    );
  }

  getAppName() {
    return this.http.get(
      'https://angular-playground-1.firebaseio.com/data.json'
    ).map(
      (response: Response) => {
        return response.json().appName;
      }
    );
  }

}
