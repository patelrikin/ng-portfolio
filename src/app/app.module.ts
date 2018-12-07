import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { TechskillsModule } from './techskills/techskills.module';
import { WorkexpModule } from './workexp/workexp.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    ContactModule,
    PortfolioModule,
    TechskillsModule,
    WorkexpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
