import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCardsComponent } from './passenger-cards.component';

describe('PassengerCardsComponent', () => {
  let component: PassengerCardsComponent;
  let fixture: ComponentFixture<PassengerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
