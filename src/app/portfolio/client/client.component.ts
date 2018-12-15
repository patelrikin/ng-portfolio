import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../data.service';
// import { SharedModule } from '../../shared.module';

import { IClient } from '../../../models/client.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  client: IClient;
  clientSubscription: Subscription;

  constructor(private ds: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ds.getClient(id).subscribe(client => {
      this.client = client;
    });
  }

  ngOnDestroy(): void {
    this.clientSubscription.unsubscribe();
  }
}
