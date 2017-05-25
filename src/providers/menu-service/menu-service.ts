import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { MenuGroup } from '../../models/menu-group';
import { Menu } from '../../models/menu';
import { HomePage } from '../../pages/home/home';
import { ListPage } from '../../pages/list/list';

@Injectable()
export class MenuService {

  menuGroups: MenuGroup[] = [];

  constructor() {
    this.initMenu();
  }

  initMenu() {
    var g = new MenuGroup("");
    g.menus = [
      new Menu('Home', 'home', 'page', HomePage),
      new Menu('My List', 'list', 'page', ListPage),
      new Menu('Favorites', 'heart', 'page', ListPage)
    ];
    this.menuGroups.push(g);

    g = new MenuGroup("Browse");
    g.menus = [
      new Menu('Featured', 'star', 'page', ListPage),
      new Menu('Popular', 'trending-up', 'page', ListPage),
      new Menu('Categories', 'filing', 'page', ListPage),
      new Menu('Tags', 'pricetags', 'page', ListPage),
    ];
    this.menuGroups.push(g);

    g = new MenuGroup("General");
    g.menus = [
      new Menu('Settings', 'settings', 'page', ListPage),
      new Menu('Help', 'help', 'page', ListPage),
      new Menu('About', 'information', 'page', ListPage),
      new Menu('Log Out', 'log-out', 'page', ListPage)
    ];
    this.menuGroups.push(g);
  }

  getMenuGroups() {
    return this.menuGroups;
  }

}
