/**
 * A custom structure that represents a custom event to emit when scroll.
 *
 * ```typescript
 * export interface ScrollCustomEvent {
 * 	atTop: boolean;
 * 	atBottom: boolean;
 * 	event: Event;
 * }
 * ```
 */
export interface ScrollCustomEvent {
	/**
	 * Flag to communicate if scroll is at the top of container
	 */
	atTop: boolean;
	/**
	 * Flag to communicate if scroll is at the bottom of container
	 */
	atBottom: boolean;
	/**
	 * Complete Scroll event available to get any more data required
	 */
	event: Event;
}
