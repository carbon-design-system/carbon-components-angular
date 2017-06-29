#Adding a dev demo

- create a folder like `component_demo`
- add a `component-demo.component.ts` and (if nessciscary) `component-demo.component.html` and `component-demo.component.css`
- import your `ComponentModule` from `src` and your `ComponentDemo` from it's demo folder in `app.module.ts`
- add your demo compoent to `app.module.ts`s `@NgModule` declarations and your component module to it's imports
- add a route for your component demo, and add a link to your route in `app.component.html`
- a winner is you