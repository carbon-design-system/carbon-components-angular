import { TableModel } from "./table.module";
import {
	Component,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation
} from "@angular/core";

/**
 * TablePagination is a child component to the Table component.
 *
 * ```html
 * <ibm-table-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-table-pagination>
 * ```
 *
 * @export
 * @class TablePagination
 */
@Component({
	selector: "ibm-table-pagination",
	template: `
	<nav class="pagination">
		<ul>
			<li *ngIf="previousPage() != model.currentPage" class="pagination_chevron">
				<a (click)="selectPage.emit(previousPage())"
				attr.title="{{'TABLE.PREVIOUS_PAGE' | translate}}"
				attr.aria-label="{{'TABLE.PREVIOUS_PAGE' | translate}}">
					<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16">
						<path d="M12.3 14.7L5.7 8.1l6.6-6.5-.9-.9L4 8.1l7.4 7.5z"/>
					</svg>
				</a>
			</li>

			<ng-container *ngIf="isSimplePagination()">
				<li *ngFor="let page of range(model.totalDataLength/model.pageLength, 1)">
					<a
						[attr.aria-current]="model.currentPage == page ? 'page' : null"
						(click)="selectPage.emit(page)">
							{{page}}
					</a>
				</li>
			</ng-container>


			<ng-container *ngIf="isComplexLeftPagination()">
				<li *ngFor="let page of range(5, 1)">
					<a
						[attr.aria-current]="model.currentPage == page ? 'page' : null"
						(click)="selectPage.emit(page)">
						{{page}}
					</a>
				</li>
				<li class="pagination_more">
					<a attr.aria-label="{{'TABLE.NEXT_3' | translate}}"
						(click)="selectPage.emit(6)">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--dotdotdot">
							<circle cx="2" cy="8" r="2"/><circle cx="14" cy="8" r="2"/><circle cx="8" cy="8" r="2"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--chevron">
							<path d="M1.6 15.4l-.9-.8L7.3 8 .7 1.4l.9-.8L9 8z"/><path d="M7.6 15.4l-.9-.8L13.3 8 6.7 1.4l.9-.8L15 8z"/>
						</svg>
					</a>
				</li>
				<li>
					<a
						[attr.aria-current]="model.currentPage == page ? 'page' : null"
						(click)="selectPage.emit(lastPage())">
						{{lastPage()}}
					</a>
				</li>
			</ng-container>


			<ng-container *ngIf="isComplexRightPagination()">
				<li>
					<a
						[attr.aria-current]="model.currentPage == 1 ? 'page' : null"
						(click)="selectPage.emit(1)">
						1
					</a>
				</li>
				<li class="pagination_more">
					<a attr.aria-label="{{'TABLE.PREVIOUS_3' | translate}}"
						(click)="selectPage.emit(lastPage()-5)">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--dotdotdot">
							<circle cx="2" cy="8" r="2"/><circle cx="14" cy="8" r="2"/><circle cx="8" cy="8" r="2"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--chevron">
							<path d="M14.4 15.4l.9-.8L8.7 8l6.6-6.6-.9-.8L7 8z"/><path d="M8.4 15.4l.9-.8L2.7 8l6.6-6.6-.9-.8L1 8z"/>
						</svg>
					</a>
				</li>
				<li *ngFor="let page of range(5, lastPage()-4)">
					<a
						[attr.aria-current]="model.currentPage == page ? 'page' : null"
						(click)="selectPage.emit(page)">
							{{page}}
					</a>
				</li>
			</ng-container>


			<ng-container *ngIf="isComplexMiddlePagination()">
				<li>
					<a
						[attr.aria-current]="model.currentPage == 1 ? 'page' : null"
						(click)="selectPage.emit(1)">
						1
					</a>
				</li>
				<li class="pagination_more">
					<a attr.aria-label="{{'TABLE.PREVIOUS_3' | translate}}"
						(click)="selectPage.emit(model.currentPage - 3)">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--dotdotdot">
							<circle cx="2" cy="8" r="2"/><circle cx="14" cy="8" r="2"/><circle cx="8" cy="8" r="2"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--chevron">
							<path d="M14.4 15.4l.9-.8L8.7 8l6.6-6.6-.9-.8L7 8z"/><path d="M8.4 15.4l.9-.8L2.7 8l6.6-6.6-.9-.8L1 8z"/>
						</svg>
					</a>
				</li>
				<li *ngFor="let page of range(3, middleStartPage())"> <!--middle-->
					<a
						[attr.aria-current]="model.currentPage == page ? 'page' : null"
						(click)="selectPage.emit(page)">
							{{page}}
					</a>
				</li>
				<li class="pagination_more">
					<a attr.aria-label="{{'TABLE.NEXT_3' | translate}}"
						(click)="selectPage.emit(model.currentPage + 3)">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--dotdotdot">
							<circle cx="2" cy="8" r="2"/><circle cx="14" cy="8" r="2"/><circle cx="8" cy="8" r="2"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" class="more--chevron">
							<path d="M1.6 15.4l-.9-.8L7.3 8 .7 1.4l.9-.8L9 8z"/><path d="M7.6 15.4l-.9-.8L13.3 8 6.7 1.4l.9-.8L15 8z"/>
						</svg>
					</a>
				</li>
				<li>
					<a
						[attr.aria-current]="model.currentPage == page ? 'page' : null"
						(click)="selectPage.emit(lastPage())">
						{{lastPage()}}
					</a>
				</li>
			</ng-container>


			<li *ngIf="nextPage() != model.currentPage" class="pagination_chevron">
				<a (click)="selectPage.emit(nextPage())"
				attr.title="{{'TABLE.NEXT_PAGE' | translate}}"
				attr.aria-label="{{'TABLE.NEXT_PAGE' | translate}}">
					<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16">
						<path d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
					</svg>
				</a>
			</li>
		</ul>
	</nav>
	`
})
export class TablePagination {
	/**
	 * `TableModel` with data the table is to display.
	 *
	 * @type {TableModel}
	 * @memberof TablePagination
	 */
	@Input() model: TableModel;

	/**
	 * Emits the new page number of the table.
	 *
	 * @memberof TablePagination
	 */
	@Output() selectPage = new EventEmitter<number>();

	/**
	 * Creates an instance of TablePagination.
	 *
	 * @param {ApplicationRef} applicationRef
	 * @memberof TablePagination
	 */
	constructor(private applicationRef: ApplicationRef) {}

	/**
	 * Generates a list of numbers. (Python function)
	 * Used to display the correct pagination controls.
	 *
	 * @param {number} count
	 * @param {number} [offset=0]
	 * @returns {array}
	 * @memberof TablePagination
	 */
	range(count: number, offset = 0) {
		return count && count > 0 ? Array(Math.ceil(count)).fill(0).map((x, i) => i + offset) : [];
	}

	/**
	 * The previous page number to navigate to from the current page.
	 *
	 * @returns {number}
	 * @memberof TablePagination
	 */
	previousPage(): number {
		return this.model.currentPage <= 1 ? 1 : this.model.currentPage - 1;
	}

	/**
	 * The next page number to navigate to from the current page.
	 *
	 * @returns {number}
	 * @memberof TablePagination
	 */
	nextPage(): number {
		const lastPage = this.lastPage();
		return this.model.currentPage >= lastPage ? lastPage : this.model.currentPage + 1;
	}

	/**
	 * The last page number to display in the pagination view.
	 *
	 * @returns {number}
	 * @memberof TablePagination
	 */
	lastPage(): number {
		return Math.ceil(this.model.totalDataLength / this.model.pageLength);
	}

	/**
	 * The middle page number to display for complex paginations.
	 *
	 * @returns {number}
	 * @memberof TablePagination
	 */
	middleStartPage(): number {
		return Math.floor(this.model.currentPage / 3) * 3;
	}

	/**
	 * Checks if the pagination component should display the simple view.
	 *
	 * @returns {boolean}
	 * @memberof TablePagination
	 */
	isSimplePagination(): boolean {
		return Math.ceil(this.model.totalDataLength / this.model.pageLength) <= 7;
	}

	/**
	 * Checks if the pagination component should display the complex left-sided truncated view.
	 *
	 * @returns {boolean}
	 * @memberof TablePagination
	 */
	isComplexLeftPagination(): boolean {
		return !this.isSimplePagination() && this.model.currentPage <= 5;
	}

	/**
	 * Checks if the pagination component should display the complex right-sided truncated view.
	 *
	 * @returns {boolean}
	 * @memberof TablePagination
	 */
	isComplexRightPagination(): boolean {
		// if the page number is less than 6, it has to be in the left.
		return !this.isSimplePagination() && this.model.currentPage >= this.lastPage() - 4 && this.model.currentPage >= 6;
	}

	/**
	 * Checks if the pagination component should display the complex both-sided truncated view.
	 *
	 * @returns {boolean}
	 * @memberof TablePagination
	 */
	isComplexMiddlePagination(): boolean {
		return !this.isSimplePagination() && !this.isComplexLeftPagination() && !this.isComplexRightPagination();
	}
}
