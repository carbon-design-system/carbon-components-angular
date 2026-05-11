/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from "@angular/core";

import { AILabelComponent } from "./ai-label.component";
import { AILabelPopoverDirective } from "./ai-label-popover.directive";
import { AILabelContent } from "./ai-label-content.directive";
import { AILabelActions } from "./ai-label-actions.directive";

@NgModule({
	exports: [
		AILabelComponent,
		AILabelContent,
		AILabelActions
	],
	imports: [
		AILabelComponent,
		AILabelPopoverDirective,
		AILabelContent,
		AILabelActions
	]
})
export class AILabelModule {}
