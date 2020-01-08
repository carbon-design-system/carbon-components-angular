// Used for both HeaderMenus and HeaderItems in the header navigation to generate
// items and menus through a model.
export interface NavigationItem {
    type: "menu | item",
    breakpoint?: number;
    title?: string,
    href?: string,
    trigger?: "click" | "mouseover",
    route?: any[],
    routeExtras?: any[],
    content?: string
    headerItems?: HeaderItemInterface[]
}

export interface HeaderItemInterface {
    href?: string,
    route?: any[],
    routeExtras?: any[],
    content?: string
}
