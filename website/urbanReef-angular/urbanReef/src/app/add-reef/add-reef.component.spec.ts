import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReefComponent } from './add-reef.component';

describe('AddReefComponent', () => {
  let component: AddReefComponent;
  let fixture: ComponentFixture<AddReefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReefComponent]
    });
    fixture = TestBed.createComponent(AddReefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
