export class PaginationModel {
	/**
	 * Tracks the current page.
	 */
	currentPage = 1;

	/**
	 * Length of page.
	 */
	pageLength? = 10;

	/**
	 * Absolute total number of items needed to paginate.
	 */
	totalDataLength = 0;
}
