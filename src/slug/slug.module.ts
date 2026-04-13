/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonModule } from "carbon-components-angular/button";
import { IconModule } from "carbon-components-angular/icon";
import { PopoverModule } from "carbon-components-angular/popover";

import { Slug } from "./slug.component";
import { AILabelContent } from "./ai-label-content.directive";
import { AILabelActions } from "./ai-label-actions.directive";

@NgModule({
	declarations: [
		Slug,
		AILabelContent,
		AILabelActions
	],
	exports: [
		Slug,
		AILabelContent,
		AILabelActions
	],
	imports: [
		CommonModule,
		ButtonModule,
		IconModule,
		PopoverModule
	]
})
export class SlugModule {}
