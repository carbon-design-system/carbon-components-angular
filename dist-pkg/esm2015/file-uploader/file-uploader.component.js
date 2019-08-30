/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, ViewChild, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { I18n } from "../i18n/i18n.module";
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/**
 * [See demo](../../?path=/story/file-uploader--basic)
 *
 * <example-url>../../iframe.html?id=file-uploader--basic</example-url>
 */
export class FileUploader {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * Accessible text for the button that opens the upload window.
         *
         * Defaults to the `FILE_UPLOADER.OPEN` value from the i18n service
         */
        this.buttonText = this.i18n.get().FILE_UPLOADER.OPEN;
        /**
         * Specify the types of files that the input should be able to receive
         */
        this.accept = [];
        /**
         * Set to `false` to tell the component to only accept a single file on upload.
         *
         * Defaults to `true`. Accepts multiple files.
         */
        this.multiple = true;
        /**
         * Set to `true` for a loading file uploader.
         */
        this.skeleton = false;
        /**
         * Provides a unique id for the underlying <input> node
         */
        this.fileUploaderId = `file-uploader-${FileUploader.fileUploaderCount}`;
        this.filesChange = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        FileUploader.fileUploaderCount++;
    }
    /**
     * Specifies the property to be used as the return value to `ngModel`
     * @return {?}
     */
    get value() {
        return this.files;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.files) {
            this.files = v;
            this.onChangeCallback(v);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // overrides the undefined files value set by the user
        if (!this.files) {
            this.files = new Set();
            this.filesChange.emit(this.files);
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    /**
     * Propagates the injected `value`.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.value) {
            this.files = value;
        }
    }
    /**
     * @return {?}
     */
    onFilesAdded() {
        /** @type {?} */
        const files = this.fileInput.nativeElement.files;
        if (!this.multiple) {
            this.files.clear();
        }
        for (let file of files) {
            /** @type {?} */
            const fileItem = {
                uploaded: false,
                state: "edit",
                file: file
            };
            this.files.add(fileItem);
            this.filesChange.emit(this.files);
        }
        this.value = this.files;
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    removeFile(fileItem) {
        this.files.delete(fileItem);
        this.fileInput.nativeElement.value = "";
        this.filesChange.emit(this.files);
    }
    /**
     * Registers the injected function to control the touch use of the `FileUploader`.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
}
/**
 * Counter used to create unique ids for file-uploader components
 */
FileUploader.fileUploaderCount = 0;
FileUploader.decorators = [
    { type: Component, args: [{
                selector: "ibm-file-uploader",
                template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate">
			<strong class="bx--file--label">{{title}}</strong>
			<p class="bx--label-description">{{description}}</p>
			<div class="bx--file">
				<button
					ibmButton="primary"
					(click)="fileInput.click()"
					[attr.for]="fileUploaderId">
					{{buttonText}}
				</button>
				<input
					#fileInput
					type="file"
					class="bx--file-input"
					[accept]="accept"
					[id]="fileUploaderId"
					[multiple]="multiple"
					tabindex="-1"
					(change)="onFilesAdded()"/>
				<div class="bx--file-container">
					<ibm-file *ngFor="let fileItem of files" [fileItem]="fileItem" (remove)="removeFile(fileItem)"></ibm-file>
				</div>
			</div>
		</ng-container>

		<ng-template #skeletonTemplate>
			<div class="bx--skeleton__text" style="width: 100px"></div>
			<div class="bx--skeleton__text" style="width: 225px"></div>
			<button ibmButton skeleton="true"></button>
		</ng-template>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: FileUploader,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
FileUploader.ctorParameters = () => [
    { type: I18n }
];
FileUploader.propDecorators = {
    buttonText: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    accept: [{ type: Input }],
    multiple: [{ type: Input }],
    skeleton: [{ type: Input }],
    fileUploaderId: [{ type: Input }],
    fileInput: [{ type: ViewChild, args: ["fileInput",] }],
    files: [{ type: Input }],
    filesChange: [{ type: Output }]
};
function FileUploader_tsickle_Closure_declarations() {
    /**
     * Counter used to create unique ids for file-uploader components
     * @type {?}
     */
    FileUploader.fileUploaderCount;
    /**
     * Accessible text for the button that opens the upload window.
     *
     * Defaults to the `FILE_UPLOADER.OPEN` value from the i18n service
     * @type {?}
     */
    FileUploader.prototype.buttonText;
    /**
     * Text set to the title
     * @type {?}
     */
    FileUploader.prototype.title;
    /**
     * Text set to the description
     * @type {?}
     */
    FileUploader.prototype.description;
    /**
     * Specify the types of files that the input should be able to receive
     * @type {?}
     */
    FileUploader.prototype.accept;
    /**
     * Set to `false` to tell the component to only accept a single file on upload.
     *
     * Defaults to `true`. Accepts multiple files.
     * @type {?}
     */
    FileUploader.prototype.multiple;
    /**
     * Set to `true` for a loading file uploader.
     * @type {?}
     */
    FileUploader.prototype.skeleton;
    /**
     * Provides a unique id for the underlying <input> node
     * @type {?}
     */
    FileUploader.prototype.fileUploaderId;
    /**
     * Maintains a reference to the view DOM element of the underlying <input> node
     * @type {?}
     */
    FileUploader.prototype.fileInput;
    /**
     * The list of files that have been submitted to be uploaded
     * @type {?}
     */
    FileUploader.prototype.files;
    /** @type {?} */
    FileUploader.prototype.filesChange;
    /** @type {?} */
    FileUploader.prototype.onTouchedCallback;
    /** @type {?} */
    FileUploader.prototype.onChangeCallback;
    /** @type {?} */
    FileUploader.prototype.i18n;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUczQyxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBRyxDQUFDOzs7Ozs7O0FBaUR0QixNQUFNOzs7O0lBa0RMLFlBQXNCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNOzs7Ozs7MEJBeENWLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUk7Ozs7c0JBWXRDLEVBQUU7Ozs7Ozt3QkFNQSxJQUFJOzs7O3dCQUlKLEtBQUs7Ozs7OEJBSUMsaUJBQWlCLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTsyQkFTbkQsSUFBSSxZQUFZLEVBQU87aUNBRUwsSUFBSTtnQ0FDVyxJQUFJO1FBRzVELFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ2pDOzs7OztJQUtELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNsQjs7Ozs7SUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFnQjtRQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Q7Ozs7SUFFRCxRQUFROztRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7S0FDRDs7OztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQW9CO1FBQzlCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7S0FDRDs7OztJQUVELFlBQVk7O1FBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkI7UUFDRCxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTs7WUFDdkIsTUFBTSxRQUFRLEdBQWE7Z0JBQzFCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxJQUFJO2FBQ1YsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUN4Qjs7Ozs7SUFFRCxVQUFVLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Ozs7O0lBS0QsaUJBQWlCLENBQUMsRUFBTztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7Ozs7SUFJRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDM0I7Ozs7O2lDQXZIMEIsQ0FBQzs7WUE5QzVCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQlQ7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDthQUNEOzs7O1lBbkRRLElBQUk7Ozt5QkE4RFgsS0FBSztvQkFJTCxLQUFLOzBCQUlMLEtBQUs7cUJBSUwsS0FBSzt1QkFNTCxLQUFLO3VCQUlMLEtBQUs7NkJBSUwsS0FBSzt3QkFJTCxTQUFTLFNBQUMsV0FBVztvQkFJckIsS0FBSzswQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRWaWV3Q2hpbGQsXG5cdEV2ZW50RW1pdHRlcixcblx0T25Jbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBJMThuIH0gZnJvbSBcIi4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSBcIi4vZmlsZS1pdGVtLmludGVyZmFjZVwiO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvZmlsZS11cGxvYWRlci0tYmFzaWMpXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPWZpbGUtdXBsb2FkZXItLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1maWxlLXVwbG9hZGVyXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFza2VsZXRvbjsgZWxzZSBza2VsZXRvblRlbXBsYXRlXCI+XG5cdFx0XHQ8c3Ryb25nIGNsYXNzPVwiYngtLWZpbGUtLWxhYmVsXCI+e3t0aXRsZX19PC9zdHJvbmc+XG5cdFx0XHQ8cCBjbGFzcz1cImJ4LS1sYWJlbC1kZXNjcmlwdGlvblwiPnt7ZGVzY3JpcHRpb259fTwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tZmlsZVwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0aWJtQnV0dG9uPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cImZpbGVJbnB1dC5jbGljaygpXCJcblx0XHRcdFx0XHRbYXR0ci5mb3JdPVwiZmlsZVVwbG9hZGVySWRcIj5cblx0XHRcdFx0XHR7e2J1dHRvblRleHR9fVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0I2ZpbGVJbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ4LS1maWxlLWlucHV0XCJcblx0XHRcdFx0XHRbYWNjZXB0XT1cImFjY2VwdFwiXG5cdFx0XHRcdFx0W2lkXT1cImZpbGVVcGxvYWRlcklkXCJcblx0XHRcdFx0XHRbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuXHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdChjaGFuZ2UpPVwib25GaWxlc0FkZGVkKClcIi8+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tZmlsZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8aWJtLWZpbGUgKm5nRm9yPVwibGV0IGZpbGVJdGVtIG9mIGZpbGVzXCIgW2ZpbGVJdGVtXT1cImZpbGVJdGVtXCIgKHJlbW92ZSk9XCJyZW1vdmVGaWxlKGZpbGVJdGVtKVwiPjwvaWJtLWZpbGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3NrZWxldG9uVGVtcGxhdGU+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNrZWxldG9uX190ZXh0XCIgc3R5bGU9XCJ3aWR0aDogMTAwcHhcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc2tlbGV0b25fX3RleHRcIiBzdHlsZT1cIndpZHRoOiAyMjVweFwiPjwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBpYm1CdXR0b24gc2tlbGV0b249XCJ0cnVlXCI+PC9idXR0b24+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogRmlsZVVwbG9hZGVyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZGVyIGltcGxlbWVudHMgT25Jbml0IHtcblx0LyoqXG5cdCAqIENvdW50ZXIgdXNlZCB0byBjcmVhdGUgdW5pcXVlIGlkcyBmb3IgZmlsZS11cGxvYWRlciBjb21wb25lbnRzXG5cdCAqL1xuXHRzdGF0aWMgZmlsZVVwbG9hZGVyQ291bnQgPSAwO1xuXHQvKipcblx0ICogQWNjZXNzaWJsZSB0ZXh0IGZvciB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIHVwbG9hZCB3aW5kb3cuXG5cdCAqXG5cdCAqIERlZmF1bHRzIHRvIHRoZSBgRklMRV9VUExPQURFUi5PUEVOYCB2YWx1ZSBmcm9tIHRoZSBpMThuIHNlcnZpY2Vcblx0ICovXG5cdEBJbnB1dCgpIGJ1dHRvblRleHQgPSB0aGlzLmkxOG4uZ2V0KCkuRklMRV9VUExPQURFUi5PUEVOO1xuXHQvKipcblx0ICogVGV4dCBzZXQgdG8gdGhlIHRpdGxlXG5cdCAqL1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHQvKipcblx0ICogVGV4dCBzZXQgdG8gdGhlIGRlc2NyaXB0aW9uXG5cdCAqL1xuXHRASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXHQvKipcblx0ICogU3BlY2lmeSB0aGUgdHlwZXMgb2YgZmlsZXMgdGhhdCB0aGUgaW5wdXQgc2hvdWxkIGJlIGFibGUgdG8gcmVjZWl2ZVxuXHQgKi9cblx0QElucHV0KCkgYWNjZXB0ID0gW107XG5cdC8qKlxuXHQgKiBTZXQgdG8gYGZhbHNlYCB0byB0ZWxsIHRoZSBjb21wb25lbnQgdG8gb25seSBhY2NlcHQgYSBzaW5nbGUgZmlsZSBvbiB1cGxvYWQuXG5cdCAqXG5cdCAqIERlZmF1bHRzIHRvIGB0cnVlYC4gQWNjZXB0cyBtdWx0aXBsZSBmaWxlcy5cblx0ICovXG5cdEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGEgbG9hZGluZyBmaWxlIHVwbG9hZGVyLlxuXHQgKi9cblx0QElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblx0LyoqXG5cdCAqIFByb3ZpZGVzIGEgdW5pcXVlIGlkIGZvciB0aGUgdW5kZXJseWluZyA8aW5wdXQ+IG5vZGVcblx0ICovXG5cdEBJbnB1dCgpIGZpbGVVcGxvYWRlcklkID0gYGZpbGUtdXBsb2FkZXItJHtGaWxlVXBsb2FkZXIuZmlsZVVwbG9hZGVyQ291bnR9YDtcblx0LyoqXG5cdCAqIE1haW50YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgdmlldyBET00gZWxlbWVudCBvZiB0aGUgdW5kZXJseWluZyA8aW5wdXQ+IG5vZGVcblx0ICovXG5cdEBWaWV3Q2hpbGQoXCJmaWxlSW5wdXRcIikgZmlsZUlucHV0O1xuXHQvKipcblx0ICogVGhlIGxpc3Qgb2YgZmlsZXMgdGhhdCBoYXZlIGJlZW4gc3VibWl0dGVkIHRvIGJlIHVwbG9hZGVkXG5cdCAqL1xuXHRASW5wdXQoKSBmaWxlczogU2V0PEZpbGVJdGVtPjtcblx0QE91dHB1dCgpIGZpbGVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0cHJvdGVjdGVkIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcblx0cHJvdGVjdGVkIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBTZXQ8RmlsZUl0ZW0+KSA9PiB2b2lkID0gbm9vcDtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4bjogSTE4bikge1xuXHRcdEZpbGVVcGxvYWRlci5maWxlVXBsb2FkZXJDb3VudCsrO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmllcyB0aGUgcHJvcGVydHkgdG8gYmUgdXNlZCBhcyB0aGUgcmV0dXJuIHZhbHVlIHRvIGBuZ01vZGVsYFxuXHQgKi9cblx0Z2V0IHZhbHVlKCk6IFNldDxGaWxlSXRlbT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbGVzO1xuXHR9XG5cdHNldCB2YWx1ZSh2OiBTZXQ8RmlsZUl0ZW0+KSB7XG5cdFx0aWYgKHYgIT09IHRoaXMuZmlsZXMpIHtcblx0XHRcdHRoaXMuZmlsZXMgPSB2O1xuXHRcdFx0dGhpcy5vbkNoYW5nZUNhbGxiYWNrKHYpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIG92ZXJyaWRlcyB0aGUgdW5kZWZpbmVkIGZpbGVzIHZhbHVlIHNldCBieSB0aGUgdXNlclxuXHRcdGlmICghdGhpcy5maWxlcykge1xuXHRcdFx0dGhpcy5maWxlcyA9IG5ldyBTZXQoKTtcblx0XHRcdHRoaXMuZmlsZXNDaGFuZ2UuZW1pdCh0aGlzLmZpbGVzKTtcblx0XHR9XG5cdH1cblxuXHRvbkJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb3BhZ2F0ZXMgdGhlIGluamVjdGVkIGB2YWx1ZWAuXG5cdCAqL1xuXHR3cml0ZVZhbHVlKHZhbHVlOiBTZXQ8RmlsZUl0ZW0+KSB7XG5cdFx0aWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLmZpbGVzID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0b25GaWxlc0FkZGVkKCkge1xuXHRcdGNvbnN0IGZpbGVzID0gdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlcztcblx0XHRpZiAoIXRoaXMubXVsdGlwbGUpIHtcblx0XHRcdHRoaXMuZmlsZXMuY2xlYXIoKTtcblx0XHR9XG5cdFx0Zm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuXHRcdFx0Y29uc3QgZmlsZUl0ZW06IEZpbGVJdGVtID0ge1xuXHRcdFx0XHR1cGxvYWRlZDogZmFsc2UsXG5cdFx0XHRcdHN0YXRlOiBcImVkaXRcIixcblx0XHRcdFx0ZmlsZTogZmlsZVxuXHRcdFx0fTtcblx0XHRcdHRoaXMuZmlsZXMuYWRkKGZpbGVJdGVtKTtcblx0XHRcdHRoaXMuZmlsZXNDaGFuZ2UuZW1pdCh0aGlzLmZpbGVzKTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWxlcztcblx0fVxuXG5cdHJlbW92ZUZpbGUoZmlsZUl0ZW0pIHtcblx0XHR0aGlzLmZpbGVzLmRlbGV0ZShmaWxlSXRlbSk7XG5cdFx0dGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cdFx0dGhpcy5maWxlc0NoYW5nZS5lbWl0KHRoaXMuZmlsZXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyB0aGUgaW5qZWN0ZWQgZnVuY3Rpb24gdG8gY29udHJvbCB0aGUgdG91Y2ggdXNlIG9mIHRoZSBgRmlsZVVwbG9hZGVyYC5cblx0ICovXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG5cdH1cblx0LyoqXG5cdCAqIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cblx0ICovXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuXHRcdHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuXHR9XG59XG4iXX0=