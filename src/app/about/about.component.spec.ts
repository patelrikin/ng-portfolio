import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { LinkedinComponent } from './linkedin.component';

import { MaterialUIModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutRoutingModule } from './about-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, MaterialUIModule, HttpClientModule, AboutRoutingModule, ActivatedRoute, Router ],
      declarations: [ AboutComponent, LinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
