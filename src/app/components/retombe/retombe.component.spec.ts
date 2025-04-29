import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetombeComponent } from './retombe.component';

describe('RetombeComponent', () => {
  let component: RetombeComponent;
  let fixture: ComponentFixture<RetombeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetombeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetombeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
