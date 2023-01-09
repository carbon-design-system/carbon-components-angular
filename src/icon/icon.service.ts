import { Injectable } from "@angular/core";
import { toString } from "@carbon/icon-helpers";

// icon imports
import {
	Add16,
	Calendar16,
	CaretDown16,
	CaretLeft16,
	CaretRight16,
	CaretUp16,
	Checkmark16,
	CheckmarkFilled16,
	CheckmarkOutline16,
	ChevronDown16,
	ChevronRight16,
	Close16,
	Copy16,
	Download16,
	ErrorFilled16,
	InformationFilled16,
	Menu16,
	OverflowMenuVertical16,
	Save16,
	Settings16,
	TrashCan16,
	Warning16,
	WarningFilled16
} from "@carbon/icons";

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
