import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRetombeeComponent } from './ajouter-retombee.component';

describe('AjouterRetombeeComponent', () => {
  let component: AjouterRetombeeComponent;
  let fixture: ComponentFixture<AjouterRetombeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRetombeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRetombeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
