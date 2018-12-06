import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ClientComponent } from './client/client.component';

@NgModule({
  imports:      [ CommonModule, PortfolioRoutingModule ],
  declarations: [ PortfolioComponent, ClientComponent ],
  exports:      [ PortfolioComponent ]
})
export class PortfolioModule { }
