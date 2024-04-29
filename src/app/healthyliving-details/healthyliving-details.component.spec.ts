import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthylivingDetailsComponent } from './healthyliving-details.component';

describe('HealthylivingDetailsComponent', () => {
  let component: HealthylivingDetailsComponent;
  let fixture: ComponentFixture<HealthylivingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthylivingDetailsComponent]
    });
    fixture = TestBed.createComponent(HealthylivingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
