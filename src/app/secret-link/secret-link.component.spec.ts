import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretLinkComponent } from './secret-link.component';

describe('SecretLinkComponent', () => {
  let component: SecretLinkComponent;
  let fixture: ComponentFixture<SecretLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
