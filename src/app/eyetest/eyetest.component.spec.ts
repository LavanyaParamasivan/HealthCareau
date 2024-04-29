import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyetestComponent } from './eyetest.component';

describe('EyetestComponent', () => {
  let component: EyetestComponent;
  let fixture: ComponentFixture<EyetestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyetestComponent]
    });
    fixture = TestBed.createComponent(EyetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
