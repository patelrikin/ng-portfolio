import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';
import { ContactRoutingModule } from './contact/contact-routing.module';
import { PortfolioRoutingModule } from './portfolio/portfolio-routing.module';
import { TechskillsRoutingModule } from './techskills/techskills-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './portfolio/client/client.component';
import { TechskillsComponent } from './techskills/techskills.component';
import { WorkexpComponent } from './workexp/workexp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ClientComponent,
    TechskillsComponent,
    WorkexpComponent
  ],
  imports: [
    BrowserModule,
    AboutRoutingModule,
    ContactRoutingModule,
    PortfolioRoutingModule,
    TechskillsRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
