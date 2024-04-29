import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyLivingComponent } from './healthy-living.component';

describe('HealthyLivingComponent', () => {
  let component: HealthyLivingComponent;
  let fixture: ComponentFixture<HealthyLivingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthyLivingComponent]
    });
    fixture = TestBed.createComponent(HealthyLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
