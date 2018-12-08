import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

import { MaterialUIModule } from '../material.module';

@NgModule({
  imports:      [ CommonModule, MaterialUIModule, AboutRoutingModule ],
  declarations: [ AboutComponent ],
  exports:      [ AboutComponent ]
})
export class AboutModule { }
