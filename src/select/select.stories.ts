import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { SelectModule } from "../";

storiesOf("Select", module).addDecorator(
	moduleMetadata({
		imports: [SelectModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-select>
			<option value="" disabled selected hidden>Choose an option</option>
          <option value="solong">A much longer option that is worth having around to check how text flows</option>
          <optgroup label="Category 1">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
          </optgroup>
		</ibm-select>
	`
	}))
	.add("Inline", () => ({
		template: `
		<ibm-select display="inline">
			<option value="" disabled selected hidden>Choose an option</option>
          <option value="solong">A much longer option that is worth having around to check how text flows</option>
          <optgroup label="Category 1">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
          </optgroup>
		</ibm-select>
	`
	}));
