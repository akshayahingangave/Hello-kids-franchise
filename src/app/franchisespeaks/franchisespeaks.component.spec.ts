import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisespeaksComponent } from './franchisespeaks.component';

describe('FranchisespeaksComponent', () => {
  let component: FranchisespeaksComponent;
  let fixture: ComponentFixture<FranchisespeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchisespeaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisespeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
