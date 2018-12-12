import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface IExperience {
  title: string;
  location: string;
  term: string;
}

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.scss']
})
export class WorkexpComponent implements OnInit {

  workexp: IExperience[];

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.ds.getWorkExperience().subscribe(data => this.workexp = data);
  }

}
