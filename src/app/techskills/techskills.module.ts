import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialUIModule from '../material.module';

import { TechskillsComponent } from './techskills.component';
import { TechskillsRoutingModule } from './techskills-routing.module';

@NgModule({
  imports:      [ CommonModule, MaterialUIModule, TechskillsRoutingModule ],
  declarations: [ TechskillsComponent ],
  exports:      [ TechskillsComponent ]
})
export class TechskillsModule { }
