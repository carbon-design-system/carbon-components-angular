import { Injectable } from "@angular/core";

@Injectable()
export class TableService {
	public getCols(row = {}, columns = []) {
		let cols = [];
		columns.forEach(col => {
			cols.push({
				data: row[col.key],
				col: col
			});
		});
		return cols;
	}
}
