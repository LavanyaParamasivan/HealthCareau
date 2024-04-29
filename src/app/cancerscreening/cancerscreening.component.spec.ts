import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerscreeningComponent } from './cancerscreening.component';

describe('CancerscreeningComponent', () => {
  let component: CancerscreeningComponent;
  let fixture: ComponentFixture<CancerscreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancerscreeningComponent]
    });
    fixture = TestBed.createComponent(CancerscreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
