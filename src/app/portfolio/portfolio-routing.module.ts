import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { ClientComponent } from './client/client.component';
import { SharedModule } from '../shared.module';


const routes: Routes = [
    { path: 'portfolio', component: PortfolioComponent
      /* , children: [
        { path: 'client/:id', component: ClientComponent }
      ] */
    },
    { path: 'client/:id', component: ClientComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes), SharedModule ],
    exports: [ RouterModule ]
})
export class PortfolioRoutingModule {

}
