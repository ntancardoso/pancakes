import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PancakesApp } from './app.component';
import { PlatformMock } from '../../test-config/mocks-ionic';
import { MenuService } from '../providers/menu-service/menu-service';

describe('PancakesApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PancakesApp],
      imports: [
        IonicModule.forRoot(PancakesApp)
      ],
      providers: [
        StatusBar,
        SplashScreen,
        { provide: Platform, useClass: PlatformMock },
        MenuService
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PancakesApp);
    component = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(component instanceof PancakesApp).toBe(true);
  });

  it('should have two pages', () => {
    expect(component.menuGroups.length).toBe(3);
  });

});
