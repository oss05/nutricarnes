import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMobileComponent } from './offer-mobile.component';

describe('OfferMobileComponent', () => {
  let component: OfferMobileComponent;
  let fixture: ComponentFixture<OfferMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
