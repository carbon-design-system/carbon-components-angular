import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Dropdown, DropdownModule } from 'carbon-components-angular/dropdown';
import { Button, ButtonModule } from 'carbon-components-angular';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ButtonModule,
        DropdownModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render an ibmButton`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const button = fixture.debugElement.query(By.directive(Button));
    expect((button.nativeElement as HTMLButtonElement).textContent).toEqual('Hello world!');
  });

  it('should render a dropdown', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const dropdown = fixture.debugElement.query(By.directive(Dropdown));
    expect(dropdown).toBeTruthy();
  });
});
