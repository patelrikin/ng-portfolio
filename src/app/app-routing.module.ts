import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about/:id', component: AboutComponent }, // TODO: remove route params experiment
  { path: '', pathMatch: 'full', redirectTo: '/profile' },
  { path: '**', pathMatch: 'full', redirectTo: '/profile' } // Catch all
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
