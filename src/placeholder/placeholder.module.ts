// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// imports
import { Placeholder } from "./placeholder.component";
import { PlaceholderService } from "./placeholder.service";


@NgModule({
	declarations: [ Placeholder ],
	exports: [ Placeholder ],
	providers: [ PlaceholderService ],
	imports: [ CommonModule ]
})
export class PlaceholderModule { }
