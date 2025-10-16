import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStateTransition } from './employee-state-transition';

describe('EmployeeStateTransition', () => {
  let component: EmployeeStateTransition;
  let fixture: ComponentFixture<EmployeeStateTransition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeStateTransition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeStateTransition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
