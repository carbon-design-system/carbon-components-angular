/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
import { I18n } from "../i18n/i18n.module";
export class File {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * Accessible translations for the close and complete icons
         */
        this.translations = this.i18n.get().FILE_UPLOADER;
        this.remove = new EventEmitter();
        this.selectedFile = true;
    }
}
File.decorators = [
    { type: Component, args: [{
                selector: "ibm-file",
                template: `
		<p class="bx--file-filename">{{fileItem.file.name}}</p>
		<span
			*ngIf="fileItem.state === 'edit'"
			class="bx--file__state-container"
			(click)="remove.emit()"
			(keyup.enter)="remove.emit()"
			(keyup.space)="remove.emit()"
			tabindex="0">
			<ibm-icon-close16
				class="bx--file-close"
				[ariaLabel]="translations.REMOVE_BUTTON">
			</ibm-icon-close16>
		</span>
		<span *ngIf="fileItem.state === 'upload'">
			<ibm-loading size="sm"></ibm-loading>
		</span>
		<span
			*ngIf="fileItem.state === 'complete'"
			class="bx--file__state-container"
			tabindex="0">
			<ibm-icon-checkmark-filled16
				class="bx--file-complete"
				[ariaLabel]="translations.CHECKMARK">
			</ibm-icon-checkmark-filled16>
		</span>
	`
            }] }
];
/** @nocollapse */
File.ctorParameters = () => [
    { type: I18n }
];
File.propDecorators = {
    translations: [{ type: Input }],
    fileItem: [{ type: Input }],
    remove: [{ type: Output }],
    selectedFile: [{ type: HostBinding, args: ["class.bx--file__selected-file",] }]
};
function File_tsickle_Closure_declarations() {
    /**
     * Accessible translations for the close and complete icons
     * @type {?}
     */
    File.prototype.translations;
    /**
     * A single `FileItem` from the set of `FileItem`s
     * @type {?}
     */
    File.prototype.fileItem;
    /** @type {?} */
    File.prototype.remove;
    /** @type {?} */
    File.prototype.selectedFile;
    /** @type {?} */
    File.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZmlsZS11cGxvYWRlci9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFFWixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBaUMzQyxNQUFNOzs7O0lBY0wsWUFBc0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07Ozs7NEJBVlIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhO3NCQU1sQyxJQUFJLFlBQVksRUFBRTs0QkFFd0IsSUFBSTtLQUU3Qjs7O1lBNUNwQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQlQ7YUFDRDs7OztZQWhDUSxJQUFJOzs7MkJBcUNYLEtBQUs7dUJBSUwsS0FBSztxQkFFTCxNQUFNOzJCQUVOLFdBQVcsU0FBQywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0Vmlld0NoaWxkLFxuXHRFdmVudEVtaXR0ZXIsXG5cdE9uSW5pdCxcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEkxOG4gfSBmcm9tIFwiLi4vaTE4bi9pMThuLm1vZHVsZVwiO1xuaW1wb3J0IHsgRmlsZUl0ZW0gfSBmcm9tIFwiLi9maWxlLWl0ZW0uaW50ZXJmYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tZmlsZVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxwIGNsYXNzPVwiYngtLWZpbGUtZmlsZW5hbWVcIj57e2ZpbGVJdGVtLmZpbGUubmFtZX19PC9wPlxuXHRcdDxzcGFuXG5cdFx0XHQqbmdJZj1cImZpbGVJdGVtLnN0YXRlID09PSAnZWRpdCdcIlxuXHRcdFx0Y2xhc3M9XCJieC0tZmlsZV9fc3RhdGUtY29udGFpbmVyXCJcblx0XHRcdChjbGljayk9XCJyZW1vdmUuZW1pdCgpXCJcblx0XHRcdChrZXl1cC5lbnRlcik9XCJyZW1vdmUuZW1pdCgpXCJcblx0XHRcdChrZXl1cC5zcGFjZSk9XCJyZW1vdmUuZW1pdCgpXCJcblx0XHRcdHRhYmluZGV4PVwiMFwiPlxuXHRcdFx0PGlibS1pY29uLWNsb3NlMTZcblx0XHRcdFx0Y2xhc3M9XCJieC0tZmlsZS1jbG9zZVwiXG5cdFx0XHRcdFthcmlhTGFiZWxdPVwidHJhbnNsYXRpb25zLlJFTU9WRV9CVVRUT05cIj5cblx0XHRcdDwvaWJtLWljb24tY2xvc2UxNj5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4gKm5nSWY9XCJmaWxlSXRlbS5zdGF0ZSA9PT0gJ3VwbG9hZCdcIj5cblx0XHRcdDxpYm0tbG9hZGluZyBzaXplPVwic21cIj48L2libS1sb2FkaW5nPlxuXHRcdDwvc3Bhbj5cblx0XHQ8c3BhblxuXHRcdFx0Km5nSWY9XCJmaWxlSXRlbS5zdGF0ZSA9PT0gJ2NvbXBsZXRlJ1wiXG5cdFx0XHRjbGFzcz1cImJ4LS1maWxlX19zdGF0ZS1jb250YWluZXJcIlxuXHRcdFx0dGFiaW5kZXg9XCIwXCI+XG5cdFx0XHQ8aWJtLWljb24tY2hlY2ttYXJrLWZpbGxlZDE2XG5cdFx0XHRcdGNsYXNzPVwiYngtLWZpbGUtY29tcGxldGVcIlxuXHRcdFx0XHRbYXJpYUxhYmVsXT1cInRyYW5zbGF0aW9ucy5DSEVDS01BUktcIj5cblx0XHRcdDwvaWJtLWljb24tY2hlY2ttYXJrLWZpbGxlZDE2PlxuXHRcdDwvc3Bhbj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlIHtcblx0LyoqXG5cdCAqIEFjY2Vzc2libGUgdHJhbnNsYXRpb25zIGZvciB0aGUgY2xvc2UgYW5kIGNvbXBsZXRlIGljb25zXG5cdCAqL1xuXHRASW5wdXQoKSB0cmFuc2xhdGlvbnMgPSB0aGlzLmkxOG4uZ2V0KCkuRklMRV9VUExPQURFUjtcblx0LyoqXG5cdCAqIEEgc2luZ2xlIGBGaWxlSXRlbWAgZnJvbSB0aGUgc2V0IG9mIGBGaWxlSXRlbWBzXG5cdCAqL1xuXHRASW5wdXQoKSBmaWxlSXRlbTogRmlsZUl0ZW07XG5cblx0QE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tZmlsZV9fc2VsZWN0ZWQtZmlsZVwiKSBzZWxlY3RlZEZpbGUgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBJMThuKSB7fVxufVxuIl19