import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanamaxPage } from './panamax.page';

describe('PanamaxPage', () => {
  let component: PanamaxPage;
  let fixture: ComponentFixture<PanamaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanamaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanamaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
