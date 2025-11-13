import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationButtonsWithNewSyntax } from './pagination-buttons-with-new-syntax';

describe('PaginationButtonsWithNewSyntax', () => {
  let component: PaginationButtonsWithNewSyntax;
  let fixture: ComponentFixture<PaginationButtonsWithNewSyntax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationButtonsWithNewSyntax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationButtonsWithNewSyntax);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
