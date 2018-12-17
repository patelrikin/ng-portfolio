import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ClientComponent } from './client/client.component';
import { MaterialUIModule } from '../material.module';

@NgModule({
  imports:      [ CommonModule, PortfolioRoutingModule, MaterialUIModule ],
  declarations: [ PortfolioComponent, ClientComponent ],
  exports:      [ PortfolioComponent ]
})
export class PortfolioModule { }
