import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  message: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(resp => {
      console.log(resp.url);
      this.message = resp.url === 'secretlink' ?
      `SHHHHHHH! URL: ${resp.url} is a secret link. You were restricted by Route Guard!` :
      `404 Not Found! URL: ${resp.url}`;
    });
  }

}
