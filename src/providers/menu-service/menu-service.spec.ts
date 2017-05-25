import { MenuService } from './menu-service';

let menuService = null;

describe('Menu Service', () => {

    beforeEach(() => {
      menuService = new MenuService();
    });

    it('should have groups', () => {
        let menuGroups = menuService.getMenuGroups();

        expect(Array.isArray(menuGroups)).toBeTruthy;
        expect(menuGroups.length).toBeGreaterThan(0);
    });

    it('should have menus', () => {
        let menuGroups = menuService.getMenuGroups();

        expect(Array.isArray(menuGroups.menus)).toBeTruthy;
    });

    
});