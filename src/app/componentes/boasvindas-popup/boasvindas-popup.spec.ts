import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasvindasPopup } from './boasvindas-popup';

describe('BoasvindasPopup', () => {
  let component: BoasvindasPopup;
  let fixture: ComponentFixture<BoasvindasPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoasvindasPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoasvindasPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
