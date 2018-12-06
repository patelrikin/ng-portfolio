import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.scss']
})
export class TechskillsComponent implements OnInit {

  frontend: Array<string>;
  framework: Array<string>;
  databases: Array<string>;
  other: Array<string>;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.frontend = this.ds.getTechSkills('frontend');
    this.framework = this.ds.getTechSkills('framework');
    this.databases = this.ds.getTechSkills('databases');
    this.other = this.ds.getTechSkills('other');
  }

}
