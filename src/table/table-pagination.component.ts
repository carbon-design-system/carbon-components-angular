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

@Component({
	selector: "n-table-pagination",
	template: `
	<nav class="pagination">
		<ul>
			<li *ngIf="previousPage() != model.currentPage" class="pagination_chevron">
				<a (click)="selectPage.emit(previousPage())" title="Previous page" aria-label="Previous page">
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
					<a aria-label="Scroll to next 3 pages"
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
					<a aria-label="Scroll to previous 3 pages"
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
					<a aria-label="Scroll to previous 3 pages"
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
					<a aria-label="Scroll to next 3 pages"
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
				<a (click)="selectPage.emit(nextPage())" title="Next page" aria-label="Next page">
					<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16">
						<path d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
					</svg>
				</a>
			</li>
		</ul>
	</nav>
	`,
	encapsulation: ViewEncapsulation.None
})
export class TablePagination {
	@Input() model: TableModel;
	@Output() selectPage = new EventEmitter<number>();

	constructor(private applicationRef: ApplicationRef) {}

	range(count: number, offset = 0) {
		return count && count > 0 ? Array(Math.ceil(count)).fill(0).map((x, i) => i + offset) : [];
	}

	previousPage(): number {
		return this.model.currentPage <= 1 ? 1 : this.model.currentPage - 1;
	}

	nextPage(): number {
		const lastPage = this.lastPage();
		return this.model.currentPage >= lastPage ? lastPage : this.model.currentPage + 1;
	}

	lastPage(): number {
		return Math.ceil(this.model.totalDataLength / this.model.pageLength);
	}

	middleStartPage(): number {
		return Math.floor(this.model.currentPage / 3) * 3;
	}

	isSimplePagination(): boolean {
		return Math.ceil(this.model.totalDataLength / this.model.pageLength) <= 7;
	}

	isComplexLeftPagination(): boolean {
		return !this.isSimplePagination() && this.model.currentPage <= 5;
	}

	isComplexRightPagination(): boolean {
		return !this.isSimplePagination() && this.model.currentPage >= this.lastPage() - 4;
	}

	isComplexMiddlePagination(): boolean {
		return !this.isSimplePagination() && !this.isComplexLeftPagination() && !this.isComplexRightPagination();
	}
}
