import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDevis } from './news-devis';

describe('NewsDevis', () => {
  let component: NewsDevis;
  let fixture: ComponentFixture<NewsDevis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDevis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDevis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
