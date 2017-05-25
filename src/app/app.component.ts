import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuGroup } from '../models/menu-group';
import { MenuService } from '../providers/menu-service/menu-service';

@Component({
  templateUrl: 'app.html'
})
export class PancakesApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  menuGroups: MenuGroup[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
      menuService: MenuService) {
    this.initializeApp();
    this.menuGroups = menuService.getMenuGroups();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  processMenu(m) {

    switch(m.action) {
      case 'page':
                this.nav.setRoot(m.actionTarget);
                break;
      default:
        console.log("No Action Required");
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
