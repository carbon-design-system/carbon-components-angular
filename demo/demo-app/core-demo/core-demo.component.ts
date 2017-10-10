import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	AfterViewInit
} from "@angular/core";

@Component({
	selector: "app-core-demo",
	template: `
	<h1>Core CSS demo</h1>

	<h2>Neutrino's core CSS is being deprecated.</h2>
	<h2>Refer to <a href="https://github.ibm.com/peretz/matter">Matter</a> for general styling.</h2>
	<h2>To ease refactoring the CSS is still avliable,
	however you should refactor Matter style as soon as possible.</h2>
	<h2>Matter is the basis of the Peretz platform, and is the canonical style guide implementation</h2>

	<br>

	<h2>Radiobox</h2>
	<section>
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
		<div class="radio">
			<label for="r3">
				<input type="radio" name="rg1" id="r3" disabled>
				<span  class="label">Radio Box 3</span>
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" disabled checked>
				<span  class="label">Radio Box</span>
			</label>
		</div>
	</section>

	<h3>Blue theme</h3>
	<section class="theme-blue">
		<div class="radio">
			<label for="r4">
				<input type="radio" name="rg2" id="r4" checked>
				<span class="label">Radio Box 1</span>
			</label>
		</div>
		<div class="radio">
			<label for="r5">
				<input type="radio" name="rg2" id="r5" class="ng-invalid ng-touched">
				<span  class="label">Radio Box 2</span>
			</label>
		</div>
		<div class="radio">
			<label for="r6">
				<input type="radio" name="rg2" id="r6" disabled>
				<span  class="label">Radio Box 3</span>
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" disabled checked>
				<span  class="label">Radio Box</span>
			</label>
		</div>
	</section>

	<br>

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
	styleUrls: ["./core-demo.component.scss"]
})
export class CoreDemo implements AfterViewInit {

	@ViewChild("interCheckbox") inCheckbox: ElementRef;
	@ViewChild("interCheckbox2") inCheckbox2: ElementRef;

	ngAfterViewInit() {
		this.inCheckbox.nativeElement.indeterminate = true;
		this.inCheckbox2.nativeElement.indeterminate = true;
	}
}
