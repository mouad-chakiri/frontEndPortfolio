import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUPComponent } from './sing-up.component';

describe('SingUPComponent', () => {
  let component: SingUPComponent;
  let fixture: ComponentFixture<SingUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingUPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
