# Neutrino
Next generation components

run `npm install` to grab all the dependencies.

### npm Commands
- `npm run demo:server` to run the demo and demo server locally
- `npm run lint` to run tslint
- `npm test` to run tests

### Contributing
- fork peretz-next/neutrino
- add a folder with your component code, styles, and documentation README.md to `./src`
- export your module from `index.ts`
- add a demo to `./demo/demo_app` (see README.md in that directory for more info)
- submit a PR, wait for the build, and get code reviewed!

### Tentative Version Strategy
 - 0.0.x: Ground work/Alpha work
 - 0.x.x: Beta/RC
 - 1.x.x: Release

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
- Components should delegate to the consumer whenever possible
- Components should do one thing, and do it *very* well
  - This does not mean they should be over specialized, but rather focus on providing a single, core experience
- Components should NOT maintain more state than absolutely necessary
  - Likewise, stateless components should be favored whenever possible
- Components should NOT *necessarily* implement the style guide point-for-point, the guide simply provides guidance on overarching functionality, components should enable that and product specific designs **without** baking in extra functionality
