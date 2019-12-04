export class PaginationModel {
	/**
	 * Tracks the current page.
	 */
	currentPage = 0;

	/**
	 * Length of page.
	 */
	pageLength = 10;

	/**
	 * Absolute total number of items needed to paginate.
	 */
	totalDataLength = 0;
}
