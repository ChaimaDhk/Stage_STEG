import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJournalisteComponent } from './ajouter-journaliste.component';

describe('AjouterJournalisteComponent', () => {
  let component: AjouterJournalisteComponent;
  let fixture: ComponentFixture<AjouterJournalisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterJournalisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterJournalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
