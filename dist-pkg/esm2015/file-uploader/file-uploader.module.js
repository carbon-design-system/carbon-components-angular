/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";
import { CheckmarkFilled16Module } from "@carbon/icons-angular/lib/checkmark--filled/16";
import { FileUploader } from "./file-uploader.component";
import { File } from "./file.component";
import { ButtonModule } from "../button/button.module";
import { LoadingModule } from "../loading/loading.module";
export { FileUploader } from "./file-uploader.component";
export class FileUploaderModule {
}
FileUploaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FileUploader, File],
                exports: [FileUploader],
                imports: [
                    CommonModule,
                    ButtonModule,
                    LoadingModule,
                    Close16Module,
                    CheckmarkFilled16Module
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFhekQsTUFBTTs7O1lBWEwsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsdUJBQXVCO2lCQUN2QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ2xvc2UxNk1vZHVsZSB9IGZyb20gXCJAY2FyYm9uL2ljb25zLWFuZ3VsYXIvbGliL2Nsb3NlLzE2XCI7XG5pbXBvcnQgeyBDaGVja21hcmtGaWxsZWQxNk1vZHVsZSB9IGZyb20gXCJAY2FyYm9uL2ljb25zLWFuZ3VsYXIvbGliL2NoZWNrbWFyay0tZmlsbGVkLzE2XCI7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gXCIuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWxlIH0gZnJvbSBcIi4vZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9hZGluZ01vZHVsZSB9IGZyb20gXCIuLi9sb2FkaW5nL2xvYWRpbmcubW9kdWxlXCI7XG5cbmV4cG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gXCIuL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0ZpbGVVcGxvYWRlciwgRmlsZV0sXG5cdGV4cG9ydHM6IFtGaWxlVXBsb2FkZXJdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEJ1dHRvbk1vZHVsZSxcblx0XHRMb2FkaW5nTW9kdWxlLFxuXHRcdENsb3NlMTZNb2R1bGUsXG5cdFx0Q2hlY2ttYXJrRmlsbGVkMTZNb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkZXJNb2R1bGUgeyB9XG4iXX0=