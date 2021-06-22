/**
 * Used for both HeaderMenus and HeaderItems in the header navigation to generate
 * items and menus through a model.
 */
export interface NavigationItem {
	type: "menu" | "item";
	title?: string;
	href?: string;
	trigger?: "click" | "mouseover";
	route?: any[];
	routeExtras?: any[];
	content?: string;
	isCurrentPage?: boolean;
	menuItems?: HeaderItemInterface[];
}

export interface HeaderItemInterface {
	href?: string;
	route?: any[];
	routeExtras?: any[];
	content?: string;
}
