import { Component, OnInit } from "@angular/core";

@Component({
	selector: "core-demo",
	template: `
	<h1>Forms Demo</h1>

	<div class="form-container">
		<label class="label label-top" for="">Field Small</label>
		<input type="text" class="input-field size-sm">
	</div>
	<br>
	<div class="form-container">
		<label class="label  label-top" for="">Field</label>
		<input type="text" class="input-field">
	</div>
	<br>
	<div class="form-container">
		<label class="label label-top" for="">Field Large</label>
		<input type="text" class="input-field size-lg">
	</div>
	<br>

	<div class="form-container">
		<label class="label label-top" for="">Textarea </label>
		<textarea class="input-field"></textarea>
	</div>
	<br>

	<h2>Checkbox</h2>
	<cdl-checkbox [(ngModel)]="firstCheckboxState">Checkbox</cdl-checkbox>
	<p>State: {{firstCheckboxState}}</p>


	<cdl-checkbox
		[(ngModel)]="secondCheckboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">
		Tristate Checkbox (State: {{secondCheckboxState}} Indeterminate: {{someSelected}})
	</cdl-checkbox>

	<cdl-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change) = "multiCheckboxChanged()"
		class="indent">
		Check ({{one.checked}})
	</cdl-checkbox>

	<cdl-checkbox class="ng-invalid ng-touched">Checkbox</cdl-checkbox>


	<br>

	<h2>Radiobox</h2>
		<div class="radio">
			<label for="r1">
				<input type="radio" name="rg1" id="r1" checked>
					<span class="label">Radio Box 1</span>
			</label>
		</div>
		<div class="radio">
			<label for="r2">
				<input type="radio" name="rg1" id="r2" class="ng-invalid ng-touched">
				<span  class="label">Radio Box 2</span>
			</label>
		</div>
	<br>


	<h2>Switch</h2>

	<div class="switch">
		<label>
			<span class="label">Switch 1 </span>
			<input type="checkbox" checked>
			<span></span>
		</label>
	</div>
	<div class="switch">
		<label>
			<span class="label">Switch 2</span>
			<input type="checkbox">
			<span></span>
		</label>
	</div>




	<h2>Static Table</h2>
	<div>
		<table class="table table-striped">
			<caption class="sr-only">
				Required table caption.
			</caption>
			<thead>
			<tr>
				<th class="text-right">#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" class="text-right">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row" class="text-right">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row" class="text-right">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
			</tbody>
		</table>
		<br>
		<br>
		<table class="table has-checkbox table-striped ">
			<caption class="sr-only">
				Required table caption.
			</caption>
			<thead>
			<tr>
				<th >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
			</tbody>
		</table>


		<br>
		<br>
		<table class="table has-checkbox table-striped size-sm">
			<caption class="sr-only">
				Required table caption.
			</caption>
			<thead>
			<tr>
				<th >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
			</tbody>
		</table>


	</div>
	`,
	styleUrls: ["./forms-demo.component.scss"]
})
export class FormsDemo {
	firstCheckboxState = true;
	secondCheckboxState = false;
	someSelected = false;

	manyCheckboxes = [{checked: false}, {checked: false}, {checked: false}, {checked: false}];

	onTristateChange() {
		this.someSelected = false;
		for (let i = 0; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];
			one.checked = this.secondCheckboxState;
		}
	}

	multiCheckboxChanged() {
		let startValue = this.manyCheckboxes[0].checked;

		for (let i = 1; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];

			if (one.checked !== startValue) {
				// set indeterminate
				this.secondCheckboxState = false;
				this.someSelected = true;
				return;
			}
		}

		this.someSelected = false;
		this.secondCheckboxState = startValue;
	}
}
