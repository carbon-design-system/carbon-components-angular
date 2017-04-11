import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
	selector: "core-demo",
	template: `
	<h1>Core CSS Demo</h1>
	<h2>Buttons</h2>
	<section>
		<h3>Primary buttons</h3>

		<button class="btn size-sm">Button</button>
		<button class="btn">Button</button>
		<button class="btn size-lg">Button</button>
		<button class="btn size-xlg">Button</button>
		<button class="btn disabled">Button</button>
		<br>

		<h3>Secondary buttons</h3>

		<button class="btn btn-secondary size-sm">Button</button>
		<button class="btn btn-secondary">Button</button>
		<button class="btn btn-secondary size-lg">Button</button>
		<button class="btn btn-secondary size-xlg">Button</button>
		<button class="btn btn-secondary disabled">Button</button>
		<br>
		<br>

		<h3>Btns group</h3>
		<div aria-label="" class="btn-group clearfix" role="group">
			<button class="btn active">Standard</button>
			<button class="btn">Standard</button>
			<button class="btn " disabled="disabled">Standard</button>
		</div>
	</section>

	<h3>Blue theme</h3>
	<section class="theme-blue">
		<h3>Primary buttons</h3>

		<button class="btn size-sm">Button</button>
		<button class="btn">Button</button>
		<button class="btn size-lg">Button</button>
		<button class="btn size-xlg">Button</button>
		<button class="btn disabled">Button</button>
		<br>

		<h3>Secondary buttons</h3>

		<button class="btn btn-secondary size-sm">Button</button>
		<button class="btn btn-secondary">Button</button>
		<button class="btn btn-secondary size-lg">Button</button>
		<button class="btn btn-secondary size-xlg">Button</button>
		<button class="btn btn-secondary disabled">Button</button>
		<br>
		<br>

		<h3>Btns group</h3>
		<div aria-label="" class="btn-group clearfix" role="group">
			<button class="btn active">Standard</button>
			<button class="btn">Standard</button>
			<button class="btn " disabled="disabled">Standard</button>
		</div>
	</section>

	<br>
	<h2>Forms</h2>
	<br>
	<div class="form-container">
		<label class="label label-top" for="">Field small</label>
		<input type="text" class="input-field size-sm">
	</div>
	<br>
	<div class="form-container">
		<label class="label  label-top" for="">Field</label>
		<input type="text" class="input-field">
	</div>
	<br>
	<div class="form-container">
		<label class="label label-top" for="">Field large</label>
		<input type="text" class="input-field size-lg">
	</div>
	<br>
	<div class="form-container disabled">
		<label class="label label-top" for="">Field disabled</label>
		<input type="text" class="input-field" disabled>
	</div>
	<br>
	<div class="form-container">
		<label class="label label-top" for="">Textarea </label>
		<textarea class="input-field"></textarea>
	</div>
	<br>

	<h2>Checkbox</h2>
	<section>
		<div class="checkbox">
			<label>
				<input type="checkbox">
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" disabled>
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" disabled checked>
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" #interCheckbox>
				<span class="label">Checkbox</span>
			</label>
		</div>


		<div class="checkbox">
			<label>
				<input type="checkbox" class="ng-invalid ng-touched">
				<span class="label">Checkbox</span>
			</label>
		</div>
	</section>

	<h3>Blue theme</h3>
	<section class="theme-blue">
		<div class="checkbox">
			<label>
				<input type="checkbox">
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" checked>
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" disabled>
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" disabled checked>
				<span class="label">Checkbox</span>
			</label>
		</div>

		<div class="checkbox">
			<label>
				<input type="checkbox" #interCheckbox2>
				<span class="label">Checkbox</span>
			</label>
		</div>


		<div class="checkbox">
			<label>
				<input type="checkbox" class="ng-invalid ng-touched">
				<span class="label">Checkbox</span>
			</label>
		</div>
	</section>

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


	<h2>Switch</h2>
	<section>
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
		<div class="switch">
			<label>
				<span class="label">Switch 3</span>
				<input type="checkbox" disabled>
				<span></span>
			</label>
		</div>
		<div class="switch">
			<label>
				<span class="label">Switch 4</span>
				<input type="checkbox" disabled checked>
				<span></span>
			</label>
		</div>
	</section>
	<section class="size-sm">
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
		<div class="switch">
			<label>
				<span class="label">Switch 3</span>
				<input type="checkbox" disabled>
				<span></span>
			</label>
		</div>
		<div class="switch">
			<label>
				<span class="label">Switch 4</span>
				<input type="checkbox" disabled checked>
				<span></span>
			</label>
		</div>
	</section>

	<h3>Blue theme</h3>
	<section class="theme-blue">
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
		<div class="switch">
			<label>
				<span class="label">Switch 3</span>
				<input type="checkbox" disabled>
				<span></span>
			</label>
		</div>
		<div class="switch">
			<label>
				<span class="label">Switch 4</span>
				<input type="checkbox" disabled checked>
				<span></span>
			</label>
		</div>
	</section>
		<section class="theme-blue size-sm">
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
		<div class="switch">
			<label>
				<span class="label">Switch 3</span>
				<input type="checkbox" disabled>
				<span></span>
			</label>
		</div>
		<div class="switch">
			<label>
				<span class="label">Switch 4</span>
				<input type="checkbox" disabled checked>
				<span></span>
			</label>
		</div>
	</section>

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
export class CoreDemo {

	@ViewChild("interCheckbox") inCheckbox: ElementRef;
	@ViewChild("interCheckbox2") inCheckbox2: ElementRef;

	ngAfterViewInit() {
		this.inCheckbox.nativeElement.indeterminate = true;
		this.inCheckbox2.nativeElement.indeterminate = true;
	}
}
