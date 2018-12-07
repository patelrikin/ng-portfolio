import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkexpRoutingModule } from './workexp-routing.module';
import { WorkexpComponent } from './workexp.component';

@NgModule({
  imports:      [ CommonModule, WorkexpRoutingModule ],
  declarations: [ WorkexpComponent ],
  exports:      [ WorkexpComponent ]
})
export class WorkexpModule { }
