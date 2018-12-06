import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkexpComponent } from './workexp/workexp.component';

const routes: Routes = [
  { path: 'about/:id', component: AboutComponent }, // TODO: remove route params experiment
  { path: 'workexp', component: WorkexpComponent },
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' } // Catch all
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
