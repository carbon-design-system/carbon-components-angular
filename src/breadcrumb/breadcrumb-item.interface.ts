/**
 * A structure that represents a breadcrumb item.
 *
 * @export
 * @interface BreadcrumbItem
 */
export interface BreadcrumbItem {
	/**
	 * Content to be displayed in the breadcrumb item.
	 * @type {string}
	 * @memberof BreadcrumbItem
	 */
	content: string;
	/**
	 * Href for the breadcrumb item.
	 * @type {string}
	 * @memberof BreadcrumbItem
	 */
	href: string;
}