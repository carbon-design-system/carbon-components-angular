import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	object,
	text
} from "@storybook/addon-knobs/angular";

import { TypeaheadSearchModule } from "./typeahead-search.module";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { TimeModule } from "@carbon/icons-angular";

const getProps = (overrides = {}) => Object.assign({}, {
	items: object("items", [
		{ content: "Cucumber" },
		{ content: "Pumpkin" },
		{ content: "Squash" },
		{ content: "Olives" },
		{ content: "Sweet corn" },
		{ content: "Apple" },
		{ content: "Avocado" },
		{ content: "Apricots" },
		{ content: "Banana" },
		{ content: "Green beans" },
		{ content: "Tomato" },
		{ content: "Eggplant" },
		{ content: "Bell peppers" },
		{ content: "special\characters\/?#{(*..*)}" }
	]),
	onSearch: function(searchEvent) {
		console.log(searchEvent);
	},
	placeholder: text("Placeholder", "Search for a fruit")
}, overrides);

storiesOf("Components|Typeahead search", module).addDecorator(
	moduleMetadata({
		imports: [TypeaheadSearchModule, DocumentationModule, TimeModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div style="width: 400px">
				<ibm-typeahead-search
					autocomplete="off"
					(search)="onSearch($event)"
					[placeholder]="placeholder">
					<ibm-typeahead-list [items]="items"></ibm-typeahead-list>
				</ibm-typeahead-search>
			</div>
		`,
		props: getProps()
	}))
	.add("With ngModel", () => ({
		template: `
			<div style="width: 400px">
				<ibm-typeahead-search
					autocomplete="off"
					(search)="onSearch($event)"
					[(ngModel)]="model"
					[placeholder]="placeholder">
					<ibm-typeahead-list [items]="items"></ibm-typeahead-list>
				</ibm-typeahead-search>
			</div>
			<span>{{model | json}}</span>
		`,
		props: getProps({
			model: "Eggplant"
		})
	}))
	.add("With template", () => ({
		template: `
			<div style="width: 400px">
				<ibm-typeahead-search
					autocomplete="off"
					(search)="onSearch($event)"
					[placeholder]="placeholder">
					<ibm-typeahead-list
						[items]="items"
						[listTpl]="listTemplate"
						[label]="listLabel">
					</ibm-typeahead-list>
				</ibm-typeahead-search>
			</div>

			<ng-template #listTemplate let-item="item">
				<div class="custom-list-item">
					<svg class="list-item-icon" ibmIconTime size="16"></svg>
					<div [innerHtml]="item" class="bx--typeahead__menu-item__option custom-text"></div>
				</div>
			</ng-template>
		`,
		styles: [`
			.custom-list-item {
				display: flex;
				align-items: center;
				padding-left: 0.75rem;
			}

			.custom-text {
				padding-left: 0px !important;
			}
		`],
		props: getProps({
			listLabel: text("List label", "Recent searches")
		})
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Toggle.html"></ibm-documentation>
		`
	}));
