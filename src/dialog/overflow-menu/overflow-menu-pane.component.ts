import {
	Component,
	HostBinding
} from "@angular/core";
import { Dialog } from "../dialog.component";

/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
@Component({
	selector: "ibm-overflow-menu-pane",
	template: `
		<div #dialog>
			<ul
				class="bx--overflow-menu-options bx--overflow-menu-options--open"
				tabindex="-1">
				<ng-template
					[ngTemplateOutlet]="dialogConfig.content"
					[ngTemplateOutletContext]="{overflowMenu: this}">
				</ng-template>
			</ul>
		</div>
		`
})
export class OverflowMenuPane extends Dialog {}
