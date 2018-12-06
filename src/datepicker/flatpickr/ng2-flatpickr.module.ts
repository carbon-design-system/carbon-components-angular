import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2FlatpickrComponent } from "./ng2-flatpickr.component";
import { Ng2FlatpickrDirective } from "./ng2-flatpickr.directive";

@NgModule({
	imports: [CommonModule],
	declarations: [
		Ng2FlatpickrComponent,
		Ng2FlatpickrDirective
	],
	exports: [
		Ng2FlatpickrComponent,
		Ng2FlatpickrDirective
	]
})
export class Ng2FlatpickrModuleTest {
}
