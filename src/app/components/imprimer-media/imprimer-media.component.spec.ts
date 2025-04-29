import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerMediaComponent } from './imprimer-media.component';

describe('ImprimerMediaComponent', () => {
  let component: ImprimerMediaComponent;
  let fixture: ComponentFixture<ImprimerMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimerMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprimerMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
