import { Pipe, PipeTransform } from "@angular/core";
import { replace } from "./i18n.service";

@Pipe({
	name: "i18nReplace"
})
export class ReplacePipe implements PipeTransform {
	transform(value, variables) {
		return replace(value, variables);
	}
}
