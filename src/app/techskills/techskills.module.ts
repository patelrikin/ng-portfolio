import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechskillsComponent } from './techskills.component';
import { TechskillsRoutingModule } from './techskills-routing.module';

@NgModule({
  imports:      [ CommonModule, TechskillsRoutingModule ],
  declarations: [ TechskillsComponent ],
  exports:      [ TechskillsComponent ]
})
export class TechskillsModule { }
