import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialUIModule from '../material.module';

import { WorkexpRoutingModule } from './workexp-routing.module';
import { WorkexpComponent } from './workexp.component';

@NgModule({
  imports:      [ CommonModule, MaterialUIModule, WorkexpRoutingModule ],
  declarations: [ WorkexpComponent ],
  exports:      [ WorkexpComponent ]
})
export class WorkexpModule { }
