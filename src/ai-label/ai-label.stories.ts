

import { moduleMetadata, Meta } from "@storybook/angular";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { LinkModule } from "../link";
import { AI_LABEL_INNER, AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";
import { AILabelModule, AILabelComponent, AILabelContent, AILabelActions } from ".";

const alignOptions = [
	"top",
	"top-start",
	"top-end",
	"right",
	"right-start",
	"right-end",
	"bottom",
	"bottom-start",
	"bottom-end",
	"left",
	"left-start",
	"left-end"
];

export default {
	title: "Components/AILabel",
	decorators: [
		moduleMetadata({
			imports: [AILabelModule, ButtonModule, IconModule, LinkModule]
		})
	],
	args: {
		aiText: "AI",
		textLabel: "",
		kind: "default",
		size: "md",
		align: "bottom",
		autoAlign: true,
		revertActive: false,
		revertLabel: "Revert to AI input",
		ariaLabel: "Show information",
		isOpen: false
	},
	argTypes: {
		kind: {
			options: ["default", "inline"],
			control: "select"
		},
		size: {
			options: ["mini", "2xs", "xs", "sm", "md", "lg", "xl"],
			control: "select"
		},
		align: {
			options: alignOptions,
			control: "select"
		},
		autoAlign: {
			control: "boolean"
		},
		revertClick: { action: "revertClick" },
		onOpen: { action: "onOpen" },
		onClose: { action: "onClose" },
		isOpenChange: { action: "isOpenChange" }
	},
	component: AILabelComponent,
	subcomponents: { AILabelContent, AILabelActions }
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<div class="ai-label-container">
			<cds-ai-label
				[aiText]="aiText"
				[kind]="kind"
				[size]="size"
				[align]="align"
				[isOpen]="isOpen"
				[autoAlign]="autoAlign"
				[ariaLabel]="ariaLabel"
				[revertActive]="revertActive"
				[revertLabel]="revertLabel"
				(revertClick)="revertClick($event)"
				(onOpen)="onOpen($event)"
				(onClose)="onClose($event)"
				(isOpenChange)="isOpenChange($event)">
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
			</cds-ai-label>
		</div>
	`,
	styles: AI_LABEL_STORY_STYLES
});

export const Default = Template.bind({});
Default.parameters = {
	docs: {
		story: { inline: false, height: "30rem" }
	},
	layout: "centered"
};

const InlineTemplate = (args) => ({
	props: args,
	template: `
		<div class="ai-label-container">
			<cds-ai-label
				[aiText]="aiText"
				kind="inline"
				[size]="size"
				[align]="align"
				[isOpen]="isOpen"
				[autoAlign]="autoAlign"
				[ariaLabel]="ariaLabel"
				[revertActive]="revertActive"
				[revertLabel]="revertLabel"
				(revertClick)="revertClick($event)"
				(onOpen)="onOpen($event)"
				(onClose)="onClose($event)"
				(isOpenChange)="isOpenChange($event)">
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
			</cds-ai-label>
		</div>
	`,
	styles: AI_LABEL_STORY_STYLES
});

export const Inline = InlineTemplate.bind({});
Inline.args = {
	kind: "inline",
	size: "md"
};
Inline.argTypes = {
	size: {
		options: ["sm", "md", "lg"],
		control: "select"
	}
};
Inline.parameters = {
	docs: {
		story: { inline: false, height: "30rem" }
	},
	layout: "centered"
};

const InlineWithContentTemplate = (args) => ({
	props: args,
	template: `
		<div class="ai-label-container">
			<cds-ai-label
				[aiText]="aiText"
				kind="inline"
				[textLabel]="textLabel"
				[size]="size"
				[align]="align"
				[isOpen]="isOpen"
				[autoAlign]="autoAlign"
				[ariaLabel]="ariaLabel"
				[revertActive]="revertActive"
				[revertLabel]="revertLabel"
				(revertClick)="revertClick($event)"
				(onOpen)="onOpen($event)"
				(onClose)="onClose($event)"
				(isOpenChange)="isOpenChange($event)">
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
			</cds-ai-label>
		</div>
	`,
	styles: AI_LABEL_STORY_STYLES
});

export const InlineWithContent = InlineWithContentTemplate.bind({});
InlineWithContent.args = {
	kind: "inline",
	textLabel: "Text goes here",
	size: "md"
};
InlineWithContent.argTypes = {
	size: {
		options: ["sm", "md", "lg"],
		control: "select"
	}
};
InlineWithContent.parameters = {
	docs: {
		story: { inline: false, height: "30rem" }
	},
	layout: "centered"
};

const RevertTemplate = (args) => ({
	props: args,
	template: `
		<div class="ai-label-container">
			<cds-ai-label
				[aiText]="aiText"
				[size]="size"
				[revertActive]="revertActive"
				[revertLabel]="revertLabel"
				(revertClick)="revertClick($event)">
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
			</cds-ai-label>
		</div>
	`,
	styles: AI_LABEL_STORY_STYLES
});

export const Revert = RevertTemplate.bind({});
Revert.args = {
	revertActive: true,
	revertLabel: "Revert to AI input"
};
Revert.parameters = {
	docs: {
		story: { inline: false, height: "12rem" }
	},
	layout: "centered"
};

const AutoAlignTemplate = (args) => ({
	props: args,
	template: `
		<div style="height: 3000px;">
			<p style="padding: 1rem;">Scroll down — the popover repositions automatically.</p>
			<div style="position: absolute; top: 700px; left: 700px;">
				<div class="ai-label-container">
					<cds-ai-label
						[aiText]="aiText"
						[kind]="kind"
						[size]="size"
						align="top"
						[autoAlign]="true"
						[isOpen]="isOpen"
						[ariaLabel]="ariaLabel"
						(onOpen)="onOpen($event)"
						(onClose)="onClose($event)"
						(isOpenChange)="isOpenChange($event)">
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
					</cds-ai-label>
				</div>
			</div>
		</div>
	`,
	styles: AI_LABEL_STORY_STYLES
});

export const WithAutoAlign = AutoAlignTemplate.bind({});
WithAutoAlign.args = {
	autoAlign: true,
	align: "top",
	isOpen: true
};
