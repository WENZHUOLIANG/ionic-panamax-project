import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppinglistDetailPage } from './shoppinglist-detail.page';

describe('ShoppinglistDetailPage', () => {
  let component: ShoppinglistDetailPage;
  let fixture: ComponentFixture<ShoppinglistDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinglistDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppinglistDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
