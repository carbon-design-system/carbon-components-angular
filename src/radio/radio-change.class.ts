import { Radio } from "./radio.component";

/**
 * Used to emit changes performed on a `Radio`.
 */
export class RadioChange {
	/**
	 * Contains the `Radio` that has been changed.
	 */
	source: Radio | null;
	/**
	 * The value of the `Radio` encompassed in the `RadioChange` class.
	 */
	value: string;

	constructor(source: Radio, value: string) {
		this.source = source;
		this.value = value;
	}
}
