import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, Platform, NavController } from 'ionic-angular/index';
import { PlatformMock } from '../../../test-config/mocks-ionic';
import { HttpModule} from '@angular/http';

import { ListPage } from './list';
import { PancakeService } from '../../providers/pancake-service/pancake-service';
import { PancakeServiceMock } from '../../../test-config/mocks';

describe('ListPage', function() {
  let de: DebugElement;
  let comp: ListPage;
  let fixture: ComponentFixture<ListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPage],
      imports: [
        IonicModule.forRoot(ListPage)
        ,HttpModule
      ],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock},
        { provide: PancakeService, useClass: PancakeServiceMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPage);
    comp = fixture.componentInstance;
  });

   afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
    });

  it('should create component', () => expect(comp).toBeDefined());

});