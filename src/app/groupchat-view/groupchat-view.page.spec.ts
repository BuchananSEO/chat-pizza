import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupchatViewPage } from './groupchat-view.page';

describe('GroupchatViewPage', () => {
  let component: GroupchatViewPage;
  let fixture: ComponentFixture<GroupchatViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupchatViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupchatViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
