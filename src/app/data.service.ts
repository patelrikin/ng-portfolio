import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cacheable } from 'ngx-cacheable';

import { IClientObj, IClient } from '../models/client.model';
import { IExperience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // baseUrl = 'http://localhost:9000/'; // TODO: make it conditional based on environment

  constructor(private http: HttpClient) { }

  @Cacheable()
  getClients(): Observable<IClientObj> {
    return this.http.get<IClientObj>('assets/clients.json')
      .pipe(
          catchError(this.handleError)
      );
  }

  @Cacheable()
  getClient(id: number): Observable<IClient> {
    return this.getClients()
      .pipe(
          map(clientData => {
            return <IClient>clientData.clients[id];
          }),
          catchError(this.handleError)
      );
  }

  @Cacheable()
  getTechSkills() {
    return this.http.get<Array<any>>('assets/techSkills.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  @Cacheable()
  getTechSkill(skillName: string) {
    return this.getTechSkills()
      .pipe(
          map(skills => {
            return skills.filter(skill => {
              return skill.skillName.toLowerCase().includes(skillName);
            })[0];
          }),
          catchError(this.handleError)
      );
  }

  @Cacheable()
  getWorkExperience(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>('assets/workExp.json')
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
