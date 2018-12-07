import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  clients: any;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getClients().subscribe(clientData => this.clients = clientData.clients);
  }

}
