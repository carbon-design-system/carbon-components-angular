import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownModule, ButtonModule, ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropdownModule, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
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
