# Carbon Components Angular [![npm](https://img.shields.io/npm/v/carbon-components-angular.svg)](https://www.npmjs.com/package/carbon-components-angular) [![Travis](https://travis-ci.com/IBM/carbon-components-angular.svg?branch=master)](https://travis-ci.com/IBM/carbon-components-angular)
An _Angular_ implementation of the Carbon Design System

### Getting started

Assuming we're starting with a new @angular/cli project:

```shell
$ npx @angular/cli new my-project --style=scss
$ cd my-project
$ npm i --save-dev carbon-components-angular carbon-components @ngx-translate/core
```

Then we need to include carbon-components in `src/styles.scss`:

```scss
@import "~carbon-components/scss/globals/scss/styles.scss";
```

And set up our translations in `src/app/app.module.ts`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

_Finally_ we can run `npm start` and start building out our application!

> *Note:* This isn't the only way to bootstrap a `carbon-components-angular` application, but the combination of `@angular/cli` and the `carbon-components` scss is our recommended setup.

### Contributing

#### Quickstart
- fork IBM/carbon-components-angular and clone it locally
- run `npm install` to grab all the dependencies, then `npm run storybook` to start storybook
- **if you are adding a component**:
  - add a folder with your component code, styles, tests and story under `src`
  - export your module from `index.ts`
- **if you are contributing a fix**:
  - add your fix, update the documentation as needed
  - consider adding or modifying a test case to cover the fix
- follow the [Angular style guide](https://angular.io/styleguide)
- be sure to run `npm test` and `npm run lint` to make sure the tests and linter pass
- submit a PR

#### Pull request guidelines
- **Keep changes small and focused.**
- If you create a pull request and then realize it is not ready to be merged, prepend "WIP: " (For example,  WIP: Fixed text overflow in accordion headers.) and assign a WIP label.
- Include a description of changes
  - attach a screenshot (or a gif!) for design reference if needed
  - reference the related issue
  	- "closes #123" or "fixes #123" will close issue #123 once the PR is merged
  	- "issue #123" just refences the issue. Only use this if you definitly need the issue to remain open.
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
- add relevant labels (bug, accsibility, design, discussion, feature, etc)
- if you have a fix to contribute, assign yourself, otherwise leave unassigned

#### npm commands
To keep our build dependancies local we use npm scripts to run our webpack, gulp, and general build tasks. You should never install webpack or gulp globally as that will likely conflict with our version. You should never need to modify the build process to add a component or story.
- `npm run storybook` to run storybook (port 6006)
- `npm run build` to generate the dist
- `docs:build` to build documentation
- `docs:server` to build and run the documentation server
- `npm run lint` to run tslint
- `npm test` to run tests

### Resources
 - [Style guide (WIP)](https://github.com/IBM/carbon-components-angular/wiki/Style-guide)
 - [General component API guidelines (WIP)](https://github.com/IBM/carbon-components-angular/wiki/Component-API-guidelines)
 - [Angular style guide](https://angular.io/styleguide)
 - [I18N tooling](https://angular.io/guide/i18n)
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

