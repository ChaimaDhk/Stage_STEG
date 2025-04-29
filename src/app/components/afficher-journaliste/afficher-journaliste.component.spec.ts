import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherJournalisteComponent } from './afficher-journaliste.component';

describe('AfficherJournalisteComponent', () => {
  let component: AfficherJournalisteComponent;
  let fixture: ComponentFixture<AfficherJournalisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherJournalisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherJournalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
