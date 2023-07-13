import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class GridService {
	public gridObservable: Observable<any | any[]>;
	private gridSubject = new BehaviorSubject<boolean>(false);
	private cssGridEnabled = false;

	constructor() {
		this.gridObservable = this.gridSubject.asObservable();
	}

	/**
	 * Ping all subscribers to update to use Css Grid
	 * @param enableCssGrid
	 */
	updateGridType(enableCssGrid: boolean) {
		if (this.cssGridEnabled === enableCssGrid) {
			return;
		}

		this.cssGridEnabled = true;
		this.gridSubject.next(enableCssGrid);
	}
}
