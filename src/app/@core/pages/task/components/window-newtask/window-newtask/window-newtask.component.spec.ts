import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNewtaskComponent } from './window-newtask.component';

describe('WindowNewtaskComponent', () => {
  let component: WindowNewtaskComponent;
  let fixture: ComponentFixture<WindowNewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowNewtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowNewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
