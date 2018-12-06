import { Injectable, ViewChild } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import clientJson from '../assets/clients.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private

  constructor() { }

  getClients() {
    return clientJson;
  }

  getClient(id) {
    return clientJson.clients[id];
  }

}
