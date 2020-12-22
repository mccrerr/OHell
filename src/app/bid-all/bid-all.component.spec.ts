import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAllComponent } from './bid-all.component';

describe('BidAllComponent', () => {
  let component: BidAllComponent;
  let fixture: ComponentFixture<BidAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
