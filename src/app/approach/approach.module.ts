import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproachComponent } from './approach.component';
import { MaterialUIModule } from '../material.module';
import { ApproachRoutingModule } from './approach-routing.module';

@NgModule({
  declarations: [ ApproachComponent ],
  imports: [
    CommonModule,
    MaterialUIModule,
    ApproachRoutingModule
  ]
})
export class ApproachModule { }
