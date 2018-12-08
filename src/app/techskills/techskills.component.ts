import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.scss']
})
export class TechskillsComponent implements OnInit {

  frontend: Array<string> = [];
  framework: Array<string> = [];
  databases: Array<string> = [];
  other: Array<string> = [];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getTechSkill('front-end').subscribe(data => this.frontend = data.skillItems);
    this.ds.getTechSkill('framework').subscribe(data => this.framework = data.skillItems);
    this.ds.getTechSkill('databases').subscribe(data => this.databases = data.skillItems);
    this.ds.getTechSkill('other').subscribe(data => this.other = data.skillItems);
  }

}
