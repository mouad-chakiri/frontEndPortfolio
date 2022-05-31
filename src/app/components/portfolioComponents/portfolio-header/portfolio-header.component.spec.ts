import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeaderComponent } from './portfolio-header.component';

describe('PortfolioHeaderComponent', () => {
  let component: PortfolioHeaderComponent;
  let fixture: ComponentFixture<PortfolioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
