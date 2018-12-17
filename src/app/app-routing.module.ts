import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SecretLinkComponent } from './secret-link/secret-link.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SecretGuardService } from './secret-guard.service';

const routes: Routes = [
  { path: 'about/:id', component: AboutComponent }, // TODO: remove route params experiment
  { path: 'approach', loadChildren: './approach/approach.module#ApproachModule' },
  { path: 'workexp', loadChildren: './workexp/workexp.module#WorkexpModule' },
  // { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
  // { path: 'client/:id', loadChildren: './portfolio/portfolio.module#PortfolioModule' },  // TODO: make sub routes lazy loaded
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'techskills', loadChildren: './techskills/techskills.module#TechskillsModule' },
  {
    path: 'secretlink',
    component: SecretLinkComponent,
    canActivate: [ SecretGuardService ]
  },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' } // Catch all
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
