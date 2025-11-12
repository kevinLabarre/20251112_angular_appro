import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneNewsPagination } from './consigne-news-pagination';

describe('ConsigneNewsPagination', () => {
  let component: ConsigneNewsPagination;
  let fixture: ComponentFixture<ConsigneNewsPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsigneNewsPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsigneNewsPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
