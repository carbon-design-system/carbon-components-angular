import { Component } from '@angular/core';

@Component({
  selector: 'cdl-side-nav',
  template: `

    <div>{{foobar}}</div>
  `,
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNav {
  foobar: string = "side nav";
}
