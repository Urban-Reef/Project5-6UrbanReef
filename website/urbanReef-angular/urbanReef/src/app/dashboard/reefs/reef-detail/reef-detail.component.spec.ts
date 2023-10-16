import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReefDetailComponent } from './reef-detail.component';

describe('ReefDetailComponent', () => {
  let component: ReefDetailComponent;
  let fixture: ComponentFixture<ReefDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReefDetailComponent]
    });
    fixture = TestBed.createComponent(ReefDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
