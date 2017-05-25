import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, Platform, NavController } from 'ionic-angular/index';
import { PlatformMock } from '../../../test-config/mocks-ionic';
import { HttpModule} from '@angular/http';

import { HomePage } from './home';
import { FeedService } from '../../providers/feed-service/feed-service';
import { FeedServiceMock } from '../../../test-config/mocks';

describe('HomePage', function() {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
        ,HttpModule
      ],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock},
        { provide: FeedService, useClass: FeedServiceMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

   afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
    });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected ion-fab', () => {
//    let feedSrvice = fixture.debugElement.injector.get(FeedService);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('ion-fab'));
    const fab = de.nativeElement;
    expect(fab).toBeDefined();
  });
});