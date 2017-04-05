export class Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export class Config {
	id: string;
	width: number;
	height: number;
	margin: Margin;
	xDomain: string;
	yDomain: string;
	yTicks: string;
	colours: Array<string>;
	animDuration: number;
}
