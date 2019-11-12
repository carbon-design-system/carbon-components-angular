import { TemplateRef } from "@angular/core";

/**
 * A structure that represents a breadcrumb item.
 */
export interface BreadcrumbItem {
	/**
	 * Content to be displayed in the breadcrumb item.
	 */
	content: string;
	/**
	 * Href for the breadcrumb item.
	 */
	href?: string;
	/**
	 * Array of commands to send to the router when the link is activated
	 * See: https://angular.io/api/router/Router#navigate
	 */
	route?: any[];
	/**
	 * Router options. Used in conjunction with `route`
	 * See: https://angular.io/api/router/Router#navigate
	 */
	routeExtras?: any;
	/**
	 * Optional `TemplateRef` for the breadcrumb item. Receives the content as an `$implicit` template variable
	 */
	template?: TemplateRef<any>;
	/**
	 * aria-current for the breadcrumb item.
	 */
	ariaCurrent?: string;
	/**
	 * Sets the current class for the breadcrumb item.
	 */
	current?: boolean;
}
