// modules
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { IconDirective } from "./icon.directive";
import { IconService } from "./icon.service";

// icon imports
import {
	Add16,
	Calendar16,
	CaretDown16,
	CaretLeft16,
	CaretRight16,
	CaretUp16,
	Checkmark16,
	CheckmarkFilled16,
	CheckmarkOutline16,
	ChevronDown16,
	ChevronRight16,
	Close16,
	Close20,
	Copy16,
	Delete16,
	Download16,
	ErrorFilled16,
	InformationFilled16,
	Menu16,
	Menu20,
	OverflowMenuVertical16,
	Save16,
	Search16,
	Settings16,
	Warning16,
	WarningFilled16
} from "@carbon/icons";

// either provides a new instance of IconService, or returns the parent
export function ICON_SERVICE_PROVIDER_FACTORY(parentService: IconService) {
	return parentService || new IconService();
}

// icon service *must* be a singleton to ensure that icons are accessible globally and not duplicated
export const ICON_SERVICE_PROVIDER = {
	provide: IconService,
	deps: [[new Optional(), new SkipSelf(), IconService]],
	useFactory: ICON_SERVICE_PROVIDER_FACTORY
};

@NgModule({
	declarations: [
		IconDirective
	],
	exports: [
		IconDirective
	],
	imports: [
		CommonModule
	],
	providers: [
		ICON_SERVICE_PROVIDER
	]
})
export class IconModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Add16,
			Calendar16,
			CaretDown16,
			CaretLeft16,
			CaretRight16,
			CaretUp16,
			Checkmark16,
			CheckmarkFilled16,
			CheckmarkOutline16,
			ChevronDown16,
			ChevronRight16,
			Close16,
			Close20,
			Copy16,
			Delete16,
			Download16,
			ErrorFilled16,
			InformationFilled16,
			Menu16,
			Menu20,
			OverflowMenuVertical16,
			Save16,
			Search16,
			Settings16,
			Warning16,
			WarningFilled16
		]);
	}
}
