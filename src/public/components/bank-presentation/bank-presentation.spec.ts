import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPresentation } from './bank-presentation';

describe('BankPresentation', () => {
  let component: BankPresentation;
  let fixture: ComponentFixture<BankPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankPresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
