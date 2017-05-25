export class Menu {
    name: string;
    icon: string;
    action: string;
    actionTarget: any;

    constructor(name: string, icon: string, action: string, actionTarget: any) {
        this.name = name;
        this.icon = icon;
        this.action = action;
        this.actionTarget = actionTarget;
    }
}