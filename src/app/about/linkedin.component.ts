import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-badge',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }

  public loadScript() {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = 'https://platform.linkedin.com/badges/js/profile.js';
    node.type = 'text/javascript';
    node.async = true;
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
