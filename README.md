# Neutrino
Next generation components

### Getting started

#### Artifactory

Run the following to add the needed information
to your `~/.npmrc`. Replace `your.email@ibm.com` with your actual IBM email address and use your w3id password to
authenticate when asked.

```bash
curl -uyour.email@ibm.com https://na.artifactory.swg-devops.com/artifactory/api/npm/wce-peretz-npm-local/auth/peretz >> ~/.npmrc
```

#### Whitewater (deprecated)

You'll need access to the whitewater hosted npm installation. We recommend using option two from [this guide](https://github.ibm.com/Whitewater/npm-enterprise) and adding an "@peretz" scope.

#### Bundler

Your project should use a module bundler - we recommend [webpack](https://webpack.js.org/).

#### Install

Then you'll be able to `npm install @peretz/neutrino` and `npm install @peretz/matter` and start importing components and styles.

### Contributing

#### Quickstart
- fork peretz/neutrino and clone it locally
- run `npm install` to grab all the dependencies, then `npm run demo:server` to start the demo server
- **if you are adding a component**:
  - add a folder with your component code, styles, tests, and documentation README.md under `src`
  - export your module from `index.ts`
  - add a demo to `./demo/demo_app` (see README.md in that directory for more info)
- **if you are contributing a fix**:
  - add your fix, update the documentation as needed
  - consider adding or modifying a test case to cover the fix
- follow the [Angular style guide](https://angular.io/styleguide) and [our general component guidelines](https://github.ibm.com/peretz/neutrino/wiki/General-component-API-guidelines)
- be sure to run `npm test` and `npm run lint` to make sure the tests and linter pass
- DO NOT change the version number.
- submit a PR

#### Pull request guidelines
- **Keep changes small and focused.**
- If you create a pull request and then realize it is not ready to be merged, prepend "WIP: " (For example,  WIP: Fixed text overflow in accordion headers.)
- Include a description of changes
  - attach a screenshot (or a gif!) for design reference if needed
  - reference the related issue
  	- "closes #123" or "fixes #123" will close issue #123 once the PR is merged
  	- "issue #123" just refences the issue. Only use this if you definitly need the issue to remain open.
  - @mention any specific other developers that need to be aware of the changes
- add the "needs review" label along with any other relevant labels
- DO NOT @mention @peretz/Development - we have a bot in ibm-front-end#peretz that will let us know
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
  - links to application source code or running demo (including connection/authentication information)
- add relevant labels (bug, accsibility, design, discussion, feature, etc)
- if you have a fix to contribute, assign yourself, otherwise leave unassigned

#### npm commands
To keep our build dependancies local we use npm scripts to run our webpack, gulp, and general build tasks. You should never install webpack or gulp globally as that will likely conflict with our version. You should never need to modify the build process to add a component or demo.
- `npm run demo:server` to run the demo server (port 9000)
- `npm run demo:build` to build the demo
- `npm run build` to generate the dist
- `npm run lint` to run tslint
- `npm test` to run tests

### Resources
 - [Angular style guide](https://angular.io/styleguide)
 - [I18N tooling](https://angular.io/docs/ts/latest/cookbook/i18n.html)
 - (Angular 2+ doesn't have anything like ngAria, instead here's [The A11Y Project](http://a11yproject.com/), [WAI-ARIA specs](https://www.w3.org/TR/wai-aria/), and [WAI-ARIA Authoring Practices](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/))
 - [CDL master files (January 2017)](https://ibm.ent.box.com/v/illustratorJanuary2017)
 - [TypeScript docs](https://www.typescriptlang.org/docs/tutorial.html)
 - [Dynamic Assessment Plugin (aka. DAP/RPT)](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W88ee03f8907c_412b_a3a8_988dabb72b35/page/Dynamic%20Assessment%20Plugin) - now shipping a pretty solid chrome plugin
 - [CDL Icon Library](https://icon.stage1.mybluemix.net/) - Note only the icons in the "MASTER SET" sets are maintained

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
