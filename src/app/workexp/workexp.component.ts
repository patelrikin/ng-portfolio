import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.scss']
})
export class WorkexpComponent implements OnInit {

  workexp: Array<object>;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.ds.getWorkExperience().subscribe(data => this.workexp = data);
  }

}
