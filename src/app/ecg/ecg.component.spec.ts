import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECGComponent } from './ecg.component';

describe('ECGComponent', () => {
  let component: ECGComponent;
  let fixture: ComponentFixture<ECGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECGComponent]
    });
    fixture = TestBed.createComponent(ECGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
