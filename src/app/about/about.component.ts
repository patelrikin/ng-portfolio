import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  id: any = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  // TODO: remove
  ngOnInit() {
    this.route.params.subscribe(resp => this.id = resp.id);
  }

  // TODO: remove
  sendMeContact() {
    this.router.navigate(['contact']);
  }

  // TODO: Remove
  ngOnDestroy(): void {
  }
}
