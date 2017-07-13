# Iconography

demo: [https://pages.github.ibm.com/peretz-next/neutrino/#/icon](https://pages.github.ibm.com/peretz-next/neutrino/#/icon)

## Components
### Icon

class: Icon

selector: `n-icon`

source: `src/icon/icon.component.ts`

**Inputs:**

| @Input | Type   | Default Value |
| ------ | ------ | ------------- |
| icon   | string | ""            |
| size   | string | "sm"          |

`icon` follows the naming convention found in the icon listing on the demo page

`size` is one of xs, sm, md, lg, or a custom value specified as a number (will be parsed and "px" appended)

Ex:
```html
<n-icon icon="Alert"></n-icon>
<n-icon icon="Alert" size="lg"></n-icon>
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

specifies the root URL that sprites should be loaded from. **NOTE:** THIS **MUST** BE SET FOR PRODUCTION - THE DEFAULT URL IS ONLY SUITABLE FOR DEMO OR DEVELOPMENT PURPOSES

`static setCacheLevel(level: "none" | "simple")`

a cache level of "none" disables all caching (sprites will always be requested again) while a level of "simple" uses a Map as a simple cache

`size2px(size)`

converts `xs|sm|md|lg` or valid numeric values to px strings

`doSpriteRequest(name)`

returns a promise that attempts to request a sprite from the baseURL

`getSprite(name)`

attempts to get the sprite from cache (assuming cacheLevel isn't "none") otherwise requests the sprite via `doSpriteRequest`
