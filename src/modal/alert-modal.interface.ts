export interface AlertModalData {
	/**
	 * Use of `modalType` is deprecated, use `type` instead
	 */
	modalType?: string;
	/**
	 * type of the modal
	 */
	type?: "default" | "danger";
	/**
	 * Use of `modalLabel` is deprecated, use `label` instead
	 */
	modalLabel?: string;
	/**
	 * Additional label shown over the modal
	 */
	label?: string;
	/**
	 * Use of `modalTitle` is deprecated, use `title` instead
	 */
	modalTitle?: string;
	/**
	 * Primary title for the modal
	 */
	title?: string;
	/**
	 * Use of `modalContent` is deprecated, use `content` instead
	 */
	modalContent?: string;
	/**
	 * Content for the modal body, could include HTML tags
	 */
	content?: string;
	/**
	 * Array of `ModalButton`s
	 */
	buttons?: Array<ModalButton>;
}

export interface ModalButton {
	/**
	 * Display value of the button
	 */
	text: string;
	/**
	 * Button type
	 */
	type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary";
	/**
	 * Callback for the button `click` event
	 */
	click: function;
}
