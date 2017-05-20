import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {

  studentChanged = new Subject();

  constructor(private http: Http) {}

  addStudent(student) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post('http://localhost:3000/api/student',
      student,
      {headers: headers});
  }

  updateStudent(student, id:String) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('http://localhost:3000/api/student/' + id,
      student,
      {headers: headers});
  }

  deleteStudent(id:string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.delete('http://localhost:3000/api/student/' + id,
            {headers: headers});
  }

  getStudents() {
    return this.http.get('http://localhost:3000/api/students')
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

  getStudent(id:string) {
    return this.http.get('http://localhost:3000/api/student/'+id)
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
