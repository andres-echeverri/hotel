import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsserComponent } from './usser.component';

describe('UsserComponent', () => {
  let component: UsserComponent;
  let fixture: ComponentFixture<UsserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
