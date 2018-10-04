export class PaginationModel {
	/**
	 * Tracks the current page.
	 *
	 * @type {number}
	 * @memberof PaginationModel
	 */
	currentPage: number;

	/**
	 * Length of page.
	 *
	 * @type {number}
	 * @memberof PaginationModel
	 */
	pageLength: number;

	/**
	 * Absolute total number of items needed to paginate.
	 *
	 * @private
	 * @type {number}
	 * @memberof PaginationModel
	 */
	totalDataLength: number;
}
