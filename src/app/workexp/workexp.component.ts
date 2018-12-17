import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { IExperience } from '../../models/experience.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.scss']
})
export class WorkexpComponent implements OnInit, OnDestroy {

  workexp: IExperience[];
  workSubscription: Subscription;

  constructor(private ds: DataService) {
  }

  ngOnInit(): void {
    this.workSubscription = this.ds.getWorkExperience().subscribe(data => this.workexp = data);
  }

  ngOnDestroy(): void {
    this.workSubscription.unsubscribe();
  }
}
