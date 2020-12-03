export class PaginationModel {
	/**
	 * Tracks the current page.
	 */
	currentPage = 1;

	/**
	 * Length of page.
	 */
	/* tslint:disable-next-line*/
	pageLength? = 10;

	/**
	 * Absolute total number of items needed to paginate.
	 */
	totalDataLength = 0;
}
