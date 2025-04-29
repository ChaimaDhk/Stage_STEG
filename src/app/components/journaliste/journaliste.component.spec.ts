import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalisteComponent } from './journaliste.component';

describe('JournalisteComponent', () => {
  let component: JournalisteComponent;
  let fixture: ComponentFixture<JournalisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
