import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMediaComponent } from './afficher-media.component';

describe('AfficherMediaComponent', () => {
  let component: AfficherMediaComponent;
  let fixture: ComponentFixture<AfficherMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
