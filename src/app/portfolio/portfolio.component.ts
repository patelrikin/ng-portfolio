import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  clients: any;
  clientSubscription: Subscription;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.clientSubscription = this.ds.getClients().subscribe(
      clientData => this.clients = clientData.clients
    );
  }

  ngOnDestroy(): void {
    this.clientSubscription.unsubscribe();
  }

}
