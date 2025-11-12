import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWithSignalsPage } from './news-with-signals-page';

describe('NewsWithSignalsPage', () => {
  let component: NewsWithSignalsPage;
  let fixture: ComponentFixture<NewsWithSignalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsWithSignalsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsWithSignalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
