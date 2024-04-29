import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcheckupComponent } from './fullcheckup.component';

describe('FullcheckupComponent', () => {
  let component: FullcheckupComponent;
  let fixture: ComponentFixture<FullcheckupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullcheckupComponent]
    });
    fixture = TestBed.createComponent(FullcheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
