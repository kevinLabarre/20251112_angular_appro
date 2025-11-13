import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDescription } from './news-description';

describe('NewsDescription', () => {
  let component: NewsDescription;
  let fixture: ComponentFixture<NewsDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
