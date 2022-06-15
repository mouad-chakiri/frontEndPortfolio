import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourHeroComponent } from './cour-hero.component';

describe('CourHeroComponent', () => {
  let component: CourHeroComponent;
  let fixture: ComponentFixture<CourHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
