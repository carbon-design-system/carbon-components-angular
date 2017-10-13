# Iconography

demo: [https://pages.github.ibm.com/peretz/neutrino/icon](https://pages.github.ibm.com/peretz/neutrino/icon)

## Usage

The Peretz iconography ecosystem is based around simple SVG sprites and the SVG `<use>` tag's `xlink:href` feature. The `use` tag and `xlink:href` is available in all [supported browsers](link to wild ducks).

Using icons in your application requires two components: `n-sprite` and `n-icon`.

`n-sprite` is used to load sprites (via the `sprite` attribute) and is generally used at the root of the application. Page specific sprites may be loaded on that page, but do note that may result in unintended network requests.

`n-icon` pulls the icon from the loaded sprite, and renders it at the specified size. Under the hood, `n-icon` generates code similar to the following:
```
<svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
```

By default `n-sprite` uses http://peretz-icons.mybluemix.net/ for sprites - this is sufficient for prototyping, but for development and production it is recommended to build streamlined sprites and host them statically. The base url should be set once through `IconService`s `setBaseURL` method.

raw SVGs live here: [https://github.ibm.com/peretz/iconography](https://github.ibm.com/peretz/iconography)

## Components
### Icon

class: Icon

selector: `n-icon`

source: `src/icon/icon.component.ts`

**Inputs:**

| @Input | Type   | Default Value |
| ------ | ------ | ------------- |
| icon   | string | ""            |
| color  | string | "dark"        |
| size   | string | "md"          |

`icon` follows the naming convention found in the icon listing on the demo page

`color` is one of blue, dark, light, white

`size` is one of xs, sm, md, lg

Ex:
```html
<n-icon icon="Alert"></n-icon>
<n-icon icon="Alert" color="white"></n-icon>
<n-icon icon="Alert" size="lg"></n-icon>
<n-icon icon="Alert" color="blue" size="xs"></n-icon>
```

### Sprite

class: Sprite

selector `n-sprite`

source: `src/icon/sprite.component.ts`

**Inputs:**

| @Input  | Type   | Default Value |
| ------- | ------ | ------------- |
| sprite  | string | ""            |

`sprite` specifies the (lowercase) sprite name as listed on the demo page

## Services
### IconService

class: IconService

`static setBaseURL(url: string)`

specifies the root URL that sprites should be loaded from. **NOTE:** THIS **MUST** BE SET FOR PRODUCTION - THE DEFAULT URL IS ONLY SUITABLE FOR DEMO OR PROTOTYPE PURPOSES

`static setCacheLevel(level: "none" | "simple")`

a cache level of "none" disables all caching (sprites will always be requested again) while a level of "simple" uses a Map as a simple cache

`doSpriteRequest(name)`

returns a promise that attempts to request a sprite from the baseURL

`getSprite(name)`

attempts to get the sprite from cache (assuming cacheLevel isn't "none") otherwise requests the sprite via `doSpriteRequest`
