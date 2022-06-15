import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourSectionComponent } from './cour-section.component';

describe('CourSectionComponent', () => {
  let component: CourSectionComponent;
  let fixture: ComponentFixture<CourSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
