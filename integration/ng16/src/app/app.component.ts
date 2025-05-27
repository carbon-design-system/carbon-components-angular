import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DropdownModule, ListItem } from 'carbon-components-angular/DropdownModule';
import { ButtonModule } from 'carbon-components-angular/ButtonModule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropdownModule, ButtonModule],
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
