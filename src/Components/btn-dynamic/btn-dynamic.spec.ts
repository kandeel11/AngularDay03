import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDynamic } from './btn-dynamic';

describe('BtnDynamic', () => {
  let component: BtnDynamic;
  let fixture: ComponentFixture<BtnDynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDynamic],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnDynamic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
