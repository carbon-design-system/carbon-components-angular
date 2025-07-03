import { Injectable, Optional, SkipSelf } from "@angular/core";
import { toString } from "@carbon/icon-helpers";

// icon imports
import Add16 from "@carbon/icons/es/add/16";
import Add20 from "@carbon/icons/es/add/20";
import Bee16 from "@carbon/icons/es/bee/16";
import Bee20 from "@carbon/icons/es/bee/20";
import Calendar16 from "@carbon/icons/es/calendar/16";
import Carbon16 from "@carbon/icons/es/carbon/16";
import Carbon20 from "@carbon/icons/es/carbon/20";
import CaretDown16 from "@carbon/icons/es/caret--down/16";
import CaretLeft16 from "@carbon/icons/es/caret--left/16";
import CaretRight16 from "@carbon/icons/es/caret--right/16";
import CaretUp16 from "@carbon/icons/es/caret--up/16";
import Checkmark16 from "@carbon/icons/es/checkmark/16";
import CheckmarkFilled16 from "@carbon/icons/es/checkmark--filled/16";
import CheckmarkFilled20 from "@carbon/icons/es/checkmark--filled/20";
import CheckmarkOutline16 from "@carbon/icons/es/checkmark--outline/16";
import ChevronDown16 from "@carbon/icons/es/chevron--down/16";
import ChevronRight16 from "@carbon/icons/es/chevron--right/16";
import CircleDash16 from "@carbon/icons/es/circle-dash/16";
import Close16 from "@carbon/icons/es/close/16";
import Close20 from "@carbon/icons/es/close/20";
import Copy16 from "@carbon/icons/es/copy/16";
import Copy20 from "@carbon/icons/es/copy/20";
import Data216 from "@carbon/icons/es/data--2/16";
import Data220 from "@carbon/icons/es/data--2/20";
import Document16 from "@carbon/icons/es/document/16";
import Document20 from "@carbon/icons/es/document/20";
import Download16 from "@carbon/icons/es/download/16";
import ErrorFilled16 from "@carbon/icons/es/error--filled/16";
import ErrorFilled20 from "@carbon/icons/es/error--filled/20";
import Fade16 from "@carbon/icons/es/fade/16";
import Fade20 from "@carbon/icons/es/fade/20";
import Folder16 from "@carbon/icons/es/folder/16";
import Incomplete16 from "@carbon/icons/es/incomplete/16";
import InformationFilled16 from "@carbon/icons/es/information--filled/16";
import InformationFilled20 from "@carbon/icons/es/information--filled/20";
import InformationSquareFilled20 from "@carbon/icons/es/information--square--filled/20";
import Menu16 from "@carbon/icons/es/menu/16";
import Menu20 from "@carbon/icons/es/menu/20";
import OverflowMenuVertical16 from "@carbon/icons/es/overflow-menu--vertical/16";
import OverflowMenuHorizontal16 from "@carbon/icons/es/overflow-menu--horizontal/16";
import Save16 from "@carbon/icons/es/save/16";
import Search16 from "@carbon/icons/es/search/16";
import Settings16 from "@carbon/icons/es/settings/16";
import SettingsAdjust16 from "@carbon/icons/es/settings--adjust/16";
import Subtract16 from "@carbon/icons/es/subtract/16";
import TrashCan16 from "@carbon/icons/es/trash-can/16";
import Warning16 from "@carbon/icons/es/warning/16";
import WarningFilled16 from "@carbon/icons/es/warning--filled/16";
import WarningFilled20 from "@carbon/icons/es/warning--filled/20";
import WarningAltFilled16 from "@carbon/icons/es/warning--alt--filled/16";
import WarningAltFilled20 from "@carbon/icons/es/warning--alt--filled/20";
import View16 from "@carbon/icons/es/view/16";
import ViewOff16 from "@carbon/icons/es/view--off/16";

/**
 * An object that represents a parsed icon
 */
export interface IconDescriptor {
	/**
	 * The element to render. For the root this is `svg`
	 */
	elem: string;
	/**
	 * An object of attributes to apply to the element.
	 *
	 * The type here is non-exhaustive.
	 */
	attrs: {
		xmlns: string,
		// needed by the icon directive to determine other attributes
		viewBox: string,
		fill: string,
		// needed by the icon directive to determine other attributes
		width: string,
		// needed by the icon directive to determine other attributes
		height: string,
		[x: string]: string
	};
	/**
	 * The content (children) of the element as an array of `IconDescriptor`s
	 * (usually without a few fields, namely `name` and `size`)
	 */
	content: IconDescriptor[];
	/**
	 * The name of the icon.
	 *
	 * Needed by the icon service.
	 */
	name: string;
	/**
	 * The size of the icon in pixels.
	 *
	 * Needed by the icon service.
	 */
	size: number;
	/**
	 * Optional. A string representation of the compiled svg.
	 * If missing the icon service will add this.
	 */
	svg?: string;
}

/**
 * Abstract class that represent a cache of icons.
 *
 * The actual caching mechanism will be implementation specific,
 * but it's likely a good idea to key by the icons name and/or size.
 * Icon name and size will always be strings, and they will be the two consistent
 * identifiers of an icon. For the purposes of storage additonal descriptor properties may
 * be used, but the name and size are the only ones guarenteed to be passed for lookup purposes.
 */
export abstract class IconCache {
	/**
	 * Finds and returns an icon based on it's name and size
	 */
	abstract get(name: string, size: string): object;
	/**
	 * stores an icon descriptor to the cache
	 */
	abstract set(name: string, size: string, descriptor: object): void;
}

/**
 * Custom error for when a name can't be found
 */
export class IconNameNotFoundError extends Error {
	constructor(name: string) {
		super(`Icon ${name} not found`);
	}
}

/**
 * Custom error for when a specific size can't be found
 */
export class IconSizeNotFoundError extends Error {
	constructor(size: string, name: string) {
		super("Size ${size} for ${name} not found");
	}
}

/**
 * Concrete implementation of `IconCache` as a simple in memory cache
 */
export class IconMemoryCache extends IconCache {
	private iconMap = new Map<string, Map<string, object>>();

	get(name: string, size: string) {
		if (!this.iconMap.has(name)) {
			throw new IconNameNotFoundError(name);
		}
		const sizeMap = this.iconMap.get(name);
		if (!sizeMap.has(size)) {
			throw new IconSizeNotFoundError(size, name);
		}
		return sizeMap.get(size);
	}

	set(name: string, size: string, descriptor: object) {
		if (!this.iconMap.has(name)) {
			this.iconMap.set(name, new Map());
		}
		const sizeMap = this.iconMap.get(name);
		sizeMap.set(size, descriptor);
	}
}

/**
 * The icon service is a singleton service responsible for registering and retriving icons from `@carbon/icons`.
 *
 * It's important to register icons before use. It's reccommended to register your icons early, likely in your app.component.
 *
 * To allow for improved tree shaking _do not_ import all the icons from `@carbon/icons` and register them.
 * Instead register only the icons in use by your application. If your application makes use of lazy loaded
 * modules you may also lazy load the icons used in that module by registering them early on in that module.
 *
 * `ngOnInit` should be sufficiantly early to register icons.
 *
 * Example:
 * ```
 * import { Accessibility16 } from "@carbon/icons";
 *
 * // ...
 *
 * class MyComponent implements OnInit {
 * 	constructor(protected iconService: IconService) {}
 *
 * 	// ...
 *
 * 	ngOnInit() {
 * 		this.iconService.register(Accessibility16);
 * 	}
 *
 * 	// ...
 * }
 * ```
 *
 * If needed it is possible to register an icon under a different name, via `registerAs`.
 */
@Injectable()
export class IconService {

	private iconCache: IconCache = new IconMemoryCache();

	constructor() {
		this.registerAll([
			Add16,
			Add20,
			Bee16,
			Bee20,
			Calendar16,
			Carbon16,
			Carbon20,
			CaretDown16,
			CaretLeft16,
			CaretRight16,
			CaretUp16,
			Checkmark16,
			CheckmarkFilled16,
			CheckmarkFilled20,
			CheckmarkOutline16,
			ChevronDown16,
			ChevronRight16,
			CircleDash16,
			Close16,
			Close20,
			Copy16,
			Copy20,
			Data216,
			Data220,
			Document16,
			Document20,
			Download16,
			ErrorFilled16,
			ErrorFilled20,
			Fade16,
			Fade20,
			Folder16,
			Incomplete16,
			InformationFilled16,
			InformationFilled20,
			InformationSquareFilled20,
			Menu16,
			Menu20,
			OverflowMenuVertical16,
			OverflowMenuHorizontal16,
			Save16,
			Search16,
			Settings16,
			SettingsAdjust16,
			Subtract16,
			TrashCan16,
			View16,
			ViewOff16,
			Warning16,
			WarningFilled16,
			WarningFilled20,
			WarningAltFilled16,
			WarningAltFilled20
		]);
	}


	/**
	 * Registers an array of icons based on the metadata provided by `@carbon/icons`
	 */
	public registerAll(descriptors: object[]) {
		descriptors.forEach(icon => this.register(icon));
	}

	/**
	 * Registers an icon based on the metadata provided by `@carbon/icons`
	 */
	public register(descriptor: object) {
		const { name } = descriptor as IconDescriptor;
		this.registerAs(name, descriptor);
	}

	/**
	 * Registers an icon based on a uniqe name and metadata provided by `@carbon/icons`
	 */
	public registerAs(name: string, descriptor: object) {
		const { size } = descriptor as IconDescriptor;
		this.iconCache.set(name, size.toString(), descriptor);
	}

	/**
	 * Gets an icon, converts it to a string, and caches the result
	 */
	public get(name: string, size: string): IconDescriptor {
		try {
			const icon = this.iconCache.get(name, size.toString()) as IconDescriptor;
			if (!icon.svg) {
				icon.svg = toString(icon);
			}
			return icon;
		} catch (e) {
			throw e;
		}
	}

	/**
	 * Configure various service settings (caching strategy ...)
	 */
	public configure(options: { cache: IconCache }) {
		this.iconCache = options.cache;
	}
}

// either provides a new instance of IconService, or returns the parent
export function ICON_SERVICE_PROVIDER_FACTORY(parentService: IconService) {
	return parentService || new IconService();
}

// icon service *must* be a singleton to ensure that icons are accessible globally and not duplicated
export const ICON_SERVICE_PROVIDER = {
	provide: IconService,
	deps: [[new Optional(), new SkipSelf(), IconService]],
	useFactory: ICON_SERVICE_PROVIDER_FACTORY
};
