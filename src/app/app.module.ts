import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { PortfolioModule } from './portfolio/portfolio.module';

// import { DataService } from './data.service';
import { SharedModule } from './shared.module';
import { MaterialUIModule } from './material.module';

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
    PortfolioModule,
    SharedModule.forRoot(),
    MaterialUIModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  /* providers: [
    DataService
  ], */
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
