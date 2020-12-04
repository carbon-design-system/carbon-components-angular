import { Component } from '@angular/core';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: ListItem[] = [
    {
      content: 'One',
      selected: false
    },
    {
      content: 'Two',
      selected: false
    },
    {
      content: 'Three',
      selected: false
    },
    {
      content: 'Four',
      selected: false
    }
  ];
}
