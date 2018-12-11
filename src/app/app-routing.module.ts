import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about/:id', component: AboutComponent }, // TODO: remove route params experiment
  { path: 'workexp', loadChildren: './workexp/workexp.module#WorkexpModule' },
  // { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
  // { path: 'client/:id', loadChildren: './portfolio/portfolio.module#PortfolioModule' },  // TODO: make sub routes lazy loaded
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'techskills', loadChildren: './techskills/techskills.module#TechskillsModule' },
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' } // Catch all
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
