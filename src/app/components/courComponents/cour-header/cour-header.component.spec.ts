import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourHeaderComponent } from './cour-header.component';

describe('CourHeaderComponent', () => {
  let component: CourHeaderComponent;
  let fixture: ComponentFixture<CourHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
