import { Injectable, ViewChild } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import clientJson from '../assets/clients.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // baseUrl = 'http://localhost:9000/'; // TODO: make it conditional based on environment

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<object>('assets/clients.json')
      .pipe(
          catchError(this.handleError)
      );
  }

  getClient(id): Observable<any> {
    return this.getClients()
      .pipe(
          map(clientData => {
            return clientData.clients[id];
          }),
          catchError(this.handleError)
      );
  }

  getTechSkills() {
    return this.http.get<Array<any>>('assets/techSkills.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getTechSkill(skillName) {
    return this.getTechSkills()
      .pipe(
          map(skills => {
            return skills.filter(skill => {
              return skill.skillName.toLowerCase().includes(skillName);
            })[0];
          }),
          catchError(this.handleError)
      );
    // return this.techSkill[skillName] || [];
  }

  getWorkExperience(): Observable<any> {
    return this.http.get<Array<any>>('assets/workExp.json')
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
