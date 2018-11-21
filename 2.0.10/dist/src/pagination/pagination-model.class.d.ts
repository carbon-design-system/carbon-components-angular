export declare class PaginationModel {
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
     * @protected
     * @type {number}
     * @memberof PaginationModel
     */
    totalDataLength: number;
}
