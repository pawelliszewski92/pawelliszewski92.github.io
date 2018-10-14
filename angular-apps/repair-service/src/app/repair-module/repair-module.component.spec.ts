import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairModuleComponent } from './repair-module.component';

describe('RepairModuleComponent', () => {
  let component: RepairModuleComponent;
  let fixture: ComponentFixture<RepairModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
