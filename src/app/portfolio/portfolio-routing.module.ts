import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'client/:id', component: ClientComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PortfolioRoutingModule {

}
