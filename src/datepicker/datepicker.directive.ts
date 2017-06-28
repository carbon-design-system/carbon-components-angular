import {
	Component,
	Directive,
	Input,
	Output,
	EventEmitter,
	OnInit,
	Injector,
	ComponentRef,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	ComponentFactoryResolver
} from "@angular/core";

import { PopoverDirective } from "./../popover/popover.directive";
import { DatepickerPopover } from "./datepicker-popover.component";
import { PopoverService } from "./../popover/popover.service";
import { DatepickerService } from "./datepicker.service";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

@Directive({
	selector: "[nDatepicker]",
	exportAs: "nDatepicker",
	providers: [DatepickerService]
})
export class DatepickerDirective implements OnInit {
	public separator: string;
	public possibleSeparators = ["-", " ", "/"];
	public popoverService: PopoverService;
	public popoverConfig: any;
	public changeOnSelect = false;

	@Input() ngModel;
	@Input() placement: "top" | "bottom" | "left" | "right" | "auto" = "auto";
	@Input() appendToBody = false;
	@Input() format: any = "yyyy/mm/dd";
	@Input() selectedDate: Date;
	@Input() validDate: boolean;

	@Output() ngModelChange = new EventEmitter();
	@Output() selectedDateChange = new EventEmitter();
	@Output() validDateChange = new EventEmitter();


	constructor(public elementRef: ElementRef, public injector: Injector,
			componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef,
			public datepickerService: DatepickerService) {

		this.popoverService = new PopoverService(DatepickerPopover, viewContainerRef, componentFactoryResolver, injector);

		this.popoverService.isClosed.subscribe((date) => {
			this.changeOnSelect = true;
			this.ngModelChange.emit(this.formatDate(date));
			this.selectedDateChange.emit(date);
			this.validDateChange.emit(true);
		});
	}

	ngOnChanges(changes) {
		if (this.changeOnSelect) {
			this.changeOnSelect = false;

		} else {
			let inputDate = this.checkValidDateInput(this.ngModel);

			if (!inputDate) {
				this.datepickerService.setSelectedDate(null);
				setTimeout(() => {
					this.validDateChange.emit(false);
					this.selectedDateChange.emit("");
				});
			} else {
				let newDate = new Date(inputDate[0], inputDate[1] - 1, inputDate[2]);

				this.datepickerService.setSelectedDate(newDate);
				setTimeout(() => {
					this.validDateChange.emit(true);
					this.selectedDateChange.emit(newDate);
				});
			}
		}
	}

	checkValidDateInput(dateStr): any {
		if (dateStr) {
			let expected = this.format.split(this.separator);
			let inputVals = dateStr.split(this.separator);
			let dateArray = Array(3);

			if (expected.length !== inputVals.length) {
				return false;
			}

			for (let val of inputVals) {
				if (val === "" || isNaN(val)) {
					return false;
				}
			}

			for (let expectedIdx in expected) {
				if (expected[expectedIdx] === "yyyy") {
					dateArray[0] = inputVals[expectedIdx];

					if (inputVals[expectedIdx].length !== 4) {
						return false;
					}
				} else if (expected[expectedIdx] === "yy") {
					dateArray[0] = "20" + inputVals[expectedIdx];

					if (inputVals[expectedIdx].length !== 2) {
						return false;
					}
				} else if (inputVals[expectedIdx].length < 0 || inputVals[expectedIdx].length > 2) {
					return false;
				} else if (expected[expectedIdx] === "mm") {
					dateArray[1] = inputVals[expectedIdx];
					if (inputVals[expectedIdx] * 1 > 12) {
						return false;
					}
				} else if (expected[expectedIdx] === "dd") {
					dateArray[2] = inputVals[expectedIdx];
					if (inputVals[expectedIdx] * 1 > 31) {
						return false;
					}
				}
			}

			return dateArray;
		} else {
			return false;
		}
	}

	formatDate(date) {
		if (!date) {
			return "";
		}

		let month = date.getMonth();
		let year = date.getFullYear();
		let day = date.getDate();
		let format = this.format.toLowerCase();
		let shortYear = year.toString().substr(-2);
		let formatedDate;

		if (format.indexOf("yyyy") > -1) {
			formatedDate = format.toString().replace("yyyy", year).replace("mm", month + 1).replace("dd", day);
		} else {
			formatedDate = format.replace("yy", shortYear).replace("mm", month + 1).replace("dd", day);
		}

		return formatedDate;
	}

	ngOnInit() {
		this.popoverConfig = {
			placement: this.placement,
			parentRef: this.elementRef,
			appendToBody: this.appendToBody,
		};

		for (let separator of this.possibleSeparators) {
			if (this.format.indexOf(separator) > -1) {
				return this.separator = separator;
			}
		}
	}

	toggle(event = null) {
		if (event && event.target) {
			this.popoverConfig.parentRef = new ElementRef(event.target);
		}

		this.popoverService.toggle(this.popoverConfig);
	}

	close() {
		this.popoverService.close();
	}
}
