import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
/*   {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: AboutComponent
  },*/
  { path: 'about/:id', component: AboutComponent }, // TODO: remove route params experiment
  // { path: 'portfolio', component: PortfolioComponent },
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' } // Catch all
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
