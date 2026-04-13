/**
 * Shared Storybook snippets for `cds-slug` (AI label) stories.
 */

export const AI_LABEL_STORY_STYLES = [`
	.ai-label-container {
		display: flex;
		align-items: flex-start;
		margin-bottom: 6rem;
	}
	.ai-label-container > * {
		margin-left: 2rem;
	}
	.ai-label-container p {
		font-size: 0.875rem;
		line-height: 1.125rem;
		font-weight: 400;
		margin: 0;
	}
	.ai-label-container .secondary {
		color: var(--cds-text-secondary);
	}
	.ai-label-container .bold {
		font-weight: 600;
	}
	.ai-label-container .ai-label-heading {
		font-size: 2.625rem;
		font-weight: 300;
		margin-bottom: 1rem;
	}
	.ai-label-container hr {
		border: 0;
		height: 1px;
		background: var(--cds-border-subtle);
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	.ai-label-check-radio-container .cds--form-item:not(:first-of-type):not(.cds--checkbox-wrapper),
	.ai-label-check-radio-container fieldset.cds--checkbox-group:not(:first-of-type) {
		margin-top: 2rem;
	}
`];

/**
 * Popover body markup (no actions).
 */
export const AI_LABEL_SLUG_BODY_HTML = `
	<div>
		<p class="secondary">AI Explained</p>
		<h2 class="ai-label-heading">84%</h2>
		<p class="secondary bold">Confidence score</p>
		<p class="secondary">
			Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
		</p>
		<hr />
		<p class="secondary">Model type</p>
		<p class="bold">Foundation model</p>
	</div>
`;

/**
 * Icon + primary action row for cds-slug (cdsAILabelActions).
 */
export const AI_LABEL_SLUG_ACTIONS_HTML = `
	<div cdsAILabelActions>
		<cds-icon-button kind="ghost" align="top" description="View">
			<svg cdsIcon="view" size="16"></svg>
		</cds-icon-button>
		<cds-icon-button kind="ghost" align="top" description="Download">
			<svg cdsIcon="download" size="16"></svg>
		</cds-icon-button>
		<cds-icon-button kind="ghost" align="top" description="Folders">
			<svg cdsIcon="folder" size="16"></svg>
		</cds-icon-button>
		<button cdsButton type="button">View details</button>
	</div>
`;

/**
 * Full projected content for `cds-slug` (body + actions).
 */
export const AI_LABEL_SLUG_INNER = `${AI_LABEL_SLUG_BODY_HTML}\n${AI_LABEL_SLUG_ACTIONS_HTML}`;

/**
 * Mini badge only — typical field / tile / dropdown decorator.
 */
export const AI_LABEL_SLUG_DECORATOR_MINI = `<cds-slug size="mini" aiText="AI"></cds-slug>`;

/**
 * Small badge — modal header / simple decorator.
 */
export const AI_LABEL_SLUG_DECORATOR_SM = `<cds-slug size="sm" aiText="AI"></cds-slug>`;

/**
 * Inline small — typical tag decorator.
 */
export const AI_LABEL_SLUG_DECORATOR_TAG_INLINE = `<cds-slug size="sm" kind="inline" aiText="AI"></cds-slug>`;
