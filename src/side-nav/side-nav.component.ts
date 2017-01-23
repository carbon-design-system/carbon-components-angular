import { Component, Input} from '@angular/core';

@Component({
  selector: 'cdl-side-nav',
  template: `

    <aside class="left-nav">
		<ng-content></ng-content>
    </aside>
  `,
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNav {

}
