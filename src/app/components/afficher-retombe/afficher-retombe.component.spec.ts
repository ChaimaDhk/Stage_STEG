import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherRetombeComponent } from './afficher-retombe.component';

describe('AfficherRetombeComponent', () => {
  let component: AfficherRetombeComponent;
  let fixture: ComponentFixture<AfficherRetombeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherRetombeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherRetombeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
