import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MessengerModalPage } from './messenger-modal.page';

describe('MessengerModalPage', () => {
  let component: MessengerModalPage;
  let fixture: ComponentFixture<MessengerModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerModalPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MessengerModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
