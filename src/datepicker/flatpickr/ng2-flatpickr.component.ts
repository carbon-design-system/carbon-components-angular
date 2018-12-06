import { FlatpickrOptions } from "./flatpickr-options.interface";
import { Component, ViewChild, AfterViewInit, forwardRef, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

declare var require: any;

if (typeof window !== "undefined") {
	require( "flatpickr" );
}

@Component({
	selector: "ibm-ng2-flatpickr",
	template: `
		<div class="ng2-flatpickr-input-container" #flatpickr>
			<ng-content></ng-content>
		</div>`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef( () => Ng2FlatpickrComponent ),
			multi: true
		}
	]
})
export class Ng2FlatpickrComponent implements AfterViewInit, ControlValueAccessor, OnChanges {

	@ViewChild("flatpickr")
	flatpickrElement: any;

	@Input()
	config: FlatpickrOptions;

	@Input()
	setDate: string | Date;


	@Input()
	type: string;

	private flatpickr: Object;

	private defaultFlatpickrOptions: FlatpickrOptions = {
		wrap: true,
		clickOpens: true,
		onChange: ( selectedDates: any ) => { this.writeValue( selectedDates ); }
	};



	///////////////////////////////////

	writeValue( value: any ) {
		this.propagateChange( value );
	}

	registerOnChange( fn: any ) {
		this.propagateChange = fn;
	}

	registerOnTouched() {}

	propagateChange = ( _: any ) => {};

	///////////////////////////////////

	setDateFromInput( date: any ) {
		this.flatpickrElement.nativeElement._flatpickr.setDate( date, true );
	}



	ngAfterViewInit() {
		if ( this.config ) {
			Object.assign( this.defaultFlatpickrOptions, this.config );
		}
		this.flatpickr = this.flatpickrElement.nativeElement.flatpickr( this.defaultFlatpickrOptions );
		if ( this.setDate ) {
			this.setDateFromInput( this.setDate );
		}
	}

	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.hasOwnProperty( "setDate" ) && changes[ "setDate" ].currentValue ) {
			this.setDateFromInput( changes[ "setDate" ].currentValue );
		}
	}

	toggleCalendar() {
		this.flatpickrElement.nativeElement.flatpickr().isOpen = !this.flatpickrElement.nativeElement.flatpickr().isOpen;
		// if (this.flatpickrElement.nativeElement.flatpickr().isOpen === true) {
		// 	this.flatpickrElement.nativeElement.flatpickr().close();
		// 	this.flatpickrElement.nativeElement.flatpickr().isOpen = false;
		// } else {
		// 	this.flatpickrElement.nativeElement.flatpickr().isOpen = true;
		// 	this.flatpickrElement.nativeElement.flatpickr().open();
		// }
	}

}
