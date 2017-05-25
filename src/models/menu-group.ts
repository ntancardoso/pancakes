import { Menu } from './menu';

export class MenuGroup {
    name: string;
    menus: Menu[];

    constructor(name: string) {
        this.name = name;
    }
}