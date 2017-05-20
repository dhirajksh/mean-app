import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  startedEditing = new Subject<string>();
  userChanged = new Subject();

  constructor(private http: Http) {}

  addUser(user) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post('http://localhost:3000/api/user',
      user,
      {headers: headers});
  }

  updateUser(user, id:String) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post('http://localhost:3000/api/updateuser/' + id,
      user,
      {headers: headers});
  }

  deleteUser(id:string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.delete('http://localhost:3000/api/user/' + id,
            {headers: headers});
  }

  getUsers() {
    return this.http.get('http://localhost:3000/api/user')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getUser(id:string) {
    return this.http.get('http://localhost:3000/api/user/'+id)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}
