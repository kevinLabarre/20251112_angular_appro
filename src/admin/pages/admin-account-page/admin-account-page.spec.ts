import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountPage } from './admin-account-page';

describe('AdminAccountPage', () => {
  let component: AdminAccountPage;
  let fixture: ComponentFixture<AdminAccountPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccountPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
