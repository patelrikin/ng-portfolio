import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechskillsComponent } from './techskills.component';

const routes: Routes = [
    { path: 'techskills', component: TechskillsComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TechskillsRoutingModule {

}
