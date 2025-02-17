<p align="center">
	<h1 align="center">Carbon Components Angular</h1>
	<p align="center">
	An Angular implementation of the Carbon Design System
		<br /><br />
		<a href="https://github.com/carbon-design-system/carbon-components-angular/actions/workflows/publish.yml">
			<img src="https://github.com/carbon-design-system/carbon-components-angular/actions/workflows/publish.yml/badge.svg" />
		</a>
		<a href="https://www.npmjs.com/package/carbon-components-angular">
			<img src="https://img.shields.io/npm/v/carbon-components-angular.svg" />
		</a>
		<img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
		<a href="https://www.netlify.com" target="_blank">
			<img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
		</a>
    <a href="https://bestpractices.coreinfrastructure.org/projects/5887">
      <img src="https://bestpractices.coreinfrastructure.org/projects/5887/badge">
    </a>
    <a href="https://discord.gg/J7JEUEkTRX">
      <img src="https://img.shields.io/discord/689212587170201628?color=5865F2" alt="Chat with us on Discord">
    </a>
	</p>
</p>

### Getting started

Assuming we're starting with a new @angular/cli project:

```shell
$ npx @angular/cli new my-project --style=scss
$ cd my-project
$ npm i --save carbon-components-angular @carbon/styles @carbon/icons
```

Next, we need to include carbon styles in `src/styles.scss`:

```scss
@use '@carbon/styles/scss/config' with (
    // Use flexbox for grid - stick to CSS Grid or Flexbox
    // CSS Grid has become the default grid system in v11
    $use-flexbox-grid: true,
	// Update path of fonts to exclude tilde, required for vite
    $font-path: '@ibm/plex'
);

@use '@carbon/styles';

// Import css variables in root
html {
	@include styles.theme(styles.$white);
}
```

Then we need to declare `@carbon/icons` as a module by creating a `module.d.ts` file (or use any existing declaration file - has `.d.ts` suffix) in your src directory:

```ts
declare module '@carbon/icons/*';
```

That's it! Now we can run `npm start` and start building out our application!

> *Note:* This isn't the only way to bootstrap a `carbon-components-angular` application, but the combination of `@angular/cli` and the `@carbon/styles` scss is our recommended setup.

[![Edit Carbon Components Angular](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/stackblitz-starters-exxkq4?file=src%2Fmain.ts)

### Support

- For general usage questions, or other discussions visit our [Github Discussions](https://github.com/carbon-design-system/carbon-components-angular/discussions)
- For things that are broken or need enhancement, [open an issue](https://github.com/carbon-design-system/carbon-components-angular/issues/new)
- For quick usage questions:
  - Join the [Carbon Design System Discord](https://discord.gg/Wys7J95Mhw)!
  - IBMers should use our #carbon-ng Slack channel

Angular version support matrix:
| Angular | v3 | v4 | v5 |
| ------- | -- | -- | ------------------- |
| 6       | ✅ | ❌ | ❌                   |
| 7       | ✅ | ✅ | ❌                   |
| 8       | ✅ | ✅ | ❌                   |
| 9       | ❌ | ✅ | ❌                   |
| 10      | ❌ | ✅ | ❌                   |
| 11      | ❌ | ✅ | ❌                   |
| 12      | ❌ | ✅ | ❌                   |
| 13      | ❌ | ✅ | ❌                   |
| 14      | ❌ | ✅ | ✅                   |
| 15      | ❌ | ✅ | ✅                   |
| 16      | ❌ | ❌ | ✅                   |
| 17      | ❌ | ❌ | ✅                   |
| 18      | ❌ | ❌ | ✅                   |

Carbon Components Angular version support matrix:
| Carbon Components Angular version | Community support | Active support |
| --------------------------------- | ----------------- | -------------- |
| v1                                | ❌                 | ❌             |
| v2                                | ❌                 | ❌             |
| v3                                | ✅                 | ❌             |
| v4                                | ✅                 | ✅             |
| v5                                | ✅                 | ✅             |

**Not supported versions: Out of support. We plan to support our latest, and previous release. Beyond that we make no guarantees of continued support - these include v1, v2**

How to read this table:

- Community support: We depend primarily on community issue reports, and contributions to help maintain our components. A version with only community support is especially reliant on contributions, though we will backport small fixes when applicable.
- Active support: We will actively maintain and update these versions with new features, new components, bug fixes, and ensure it's compatible with the Carbon Design System and latest Angular versions

### Contributing

#### IBMers contributing
**If you are an IBMer**, you must complete the steps at [W3 Developer](https://w3.ibm.com/developer/docs/open-source/contributing/) before contributing to any open source projects. See our [contributing guidelines](https://github.com/carbon-design-system/carbon-components-angular/blob/master/.github/CONTRIBUTING.md) for more details.

#### Quickstart
- fork carbon-design-system/carbon-components-angular and clone it locally
- run `npm install` to grab all the dependencies, then `npm run storybook` to start storybook
- **if you are adding a component**:
  - add a folder with your component code, styles, tests and story under `src`
  - export your module from `index.ts`
- **if you are contributing a fix**:
  - add your fix, update the documentation as needed
  - consider adding or modifying a test case to cover the fix
- follow the [Angular style guide](https://angular.dev/style-guide)
- be sure to run `npm test` and `npm run lint` to make sure the tests and linter pass
- submit a PR

#### Pull request guidelines
- **Keep changes small and focused.**
- If you create a pull request and then realize it is not ready to be merged, prepend "WIP: " (For example,  WIP: Fixed text overflow in accordion headers.) and assign a WIP label.
- Include a description of changes
  - attach a screenshot (or a gif!) for design reference if needed
  - reference the related issue
  	- "closes #123" or "fixes #123" will close issue #123 once the PR is merged
  	- "issue #123" just references the issue. Only use this if you definitely need the issue to remain open.
  - @mention any specific other developers that need to be aware of the changes
- add the "needs review" label along with any other relevant labels
- [link to code review checklist goes here](#)

#### Issues submission guidelines
- **One issue per defect** - do not open an issue that spans multiple defects
- provide a descriptive title that mentions the component and version the issue covers
- provide
  - version(s) affected
  - a description of the issue
  - steps taken to produce the issue
  - expected behaviour
  - current behaviour
  - screenshots if needed
  - relevant code snippets
  - links to application source code or running demo ([Codesandbox is awesome for this!](https://codesandbox.io/s/angular)) (including connection/authentication information)
- add relevant labels (bug, accessibility, design, discussion, feature, etc)
- if you have a fix to contribute, assign yourself, otherwise leave unassigned

#### npm commands
To keep our build dependencies local we use npm scripts to run our webpack, gulp, and general build tasks. You should never install webpack or gulp globally as that will likely conflict with our version. You should never need to modify the build process to add a component or story.
- `npm run storybook` to run storybook (port 6006)
- `npm run build` to generate the dist
- `docs:build` to build documentation
- `docs:server` to build and run the documentation server
- `npm run lint` to run tslint
- `npm test` to run tests

### Resources
 - [Style guide (WIP)](https://github.com/carbon-design-system/carbon-components-angular/wiki/Style-guide)
 - [General component API guidelines (WIP)](https://github.com/carbon-design-system/carbon-components-angular/wiki/Component-API-guidelines)
 - [Angular style guide](https://angular.io/styleguide)
 - I18N tooling
	- [I18N guide](https://angular.io/guide/i18n)
	- [ngx-translate](https://github.com/ngx-translate/core)
 - (Angular 2+ doesn't have anything like ngAria, instead here's [The A11Y Project](http://a11yproject.com/), [WAI-ARIA specs](https://www.w3.org/TR/wai-aria/), and [WAI-ARIA Authoring Practices](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/))
 - [TypeScript docs](https://www.typescriptlang.org/docs/tutorial.html)


### Philosophy
- Components should be the smallest unit of computation
  - Think in terms of pages and applications composed from a multitude of components rather than pages or applications as a single unit of computation
- Components should delegate to the consumer whenever possible
  - The individual applications should be the single source of truth, and be able to create any UI from our building blocks
- Components should do one thing, and do it well
  - This does not mean they should be over specialized, but rather focus on providing a single, core experience
- Components should NOT maintain more state than absolutely necessary
  - Likewise, stateless components should be favored whenever possible
- Components should NOT *necessarily* implement the style guide point-for-point, the guide simply provides guidance on overarching functionality, components should enable that and product specific designs **without** baking in extra functionality

## Code of Conduct
Read our code of conduct [here](./.github/CODE_OF_CONDUCT.md)

## <picture><source height="20" width="20" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ibm-telemetry/telemetry-js/main/docs/images/ibm-telemetry-dark.svg"><source height="20" width="20" media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ibm-telemetry/telemetry-js/main/docs/images/ibm-telemetry-light.svg"><img height="20" width="20" alt="IBM Telemetry" src="https://raw.githubusercontent.com/ibm-telemetry/telemetry-js/main/docs/images/ibm-telemetry-light.svg"></picture> IBM Telemetry

This package uses IBM Telemetry to collect de-identified and anonymized metrics data. By installing
this package as a dependency you are agreeing to telemetry collection. To opt out, see
[Opting out of IBM Telemetry data collection](https://github.com/ibm-telemetry/telemetry-js/tree/main#opting-out-of-ibm-telemetry-data-collection).
For more information on the data being collected, please see the
[IBM Telemetry documentation](https://github.com/ibm-telemetry/telemetry-js/tree/main#ibm-telemetry-collection-basics).
