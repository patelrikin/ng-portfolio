import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id: any = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(resp => this.id = resp.id);
   }

  ngOnInit() {
  }

  // TODO: remove
  sendMeContact() {
    this.router.navigate(['contact']);
  }
}
