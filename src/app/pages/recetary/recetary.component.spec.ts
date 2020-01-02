import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaryComponent } from './recetary.component';

describe('RecetaryComponent', () => {
  let component: RecetaryComponent;
  let fixture: ComponentFixture<RecetaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
