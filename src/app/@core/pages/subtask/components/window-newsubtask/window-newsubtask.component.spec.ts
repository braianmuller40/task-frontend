import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNewsubtaskComponent } from './window-newsubtask.component';

describe('WindowNewsubtaskComponent', () => {
  let component: WindowNewsubtaskComponent;
  let fixture: ComponentFixture<WindowNewsubtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowNewsubtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowNewsubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
