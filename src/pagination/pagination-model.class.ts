export class PaginationModel {
	/**
	 * Tracks the current page.
	 */
	currentPage: number;

	/**
	 * Length of page.
	 */
	pageLength: number;

	/**
	 * Absolute total number of items needed to paginate.
	 */
	totalDataLength: number;
}
