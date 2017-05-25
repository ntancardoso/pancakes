import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { PancakesApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuService } from '../providers/menu-service/menu-service';
import { PancakeService } from '../providers/pancake-service/pancake-service';
//import { FeedService } from '../providers/feed-service/feed-service';

@NgModule({
  declarations: [
    PancakesApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(PancakesApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PancakesApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService,
    PancakeService
//    FeedServiceProvider
  ]
})
export class AppModule {}
