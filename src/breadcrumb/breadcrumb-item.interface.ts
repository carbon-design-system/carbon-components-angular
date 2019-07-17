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
	href: string;
	/**
	 * Optional `TemplateRef` for the breadcrumb item. Receives the content as an `$implicit` template variable
	 */
	template?: TemplateRef<any>;
}
