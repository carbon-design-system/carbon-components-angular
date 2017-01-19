import { Component, OnInit } from "@angular/core";

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
	selector: "typeahead-demo",
	templateUrl: "./typeahead-demo.component.html"
})
export class TypeaheadDemo {
	private stringList = [];
	private originalStringList = ['Alabama', 'Alaska', 'Arizona',
	'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
	'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
	'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
	'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
	'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
	'New Mexico', 'New York', 'North Dakota', 'North Carolina',
	'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
	'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
	'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	private staticList = [];
	private originalList = [];
	private list = [];
	private url =`https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1`;
	private selectedString;
	private selectedStatic;
	private selectedAsync;


	constructor (private http: Http) {}

	ngOnInit() {
		this.http.get(this.url)
		.toPromise()
		.then(data => {
			this.originalList = data.json().photos.photo;
		});
	}

	stringSearch(searchTerm) {
		this.stringList = this.originalStringList.filter(item =>
			new RegExp(searchTerm, 'gi').test(item));
	}

	staticSearch(searchTerm) {
		this.staticList = this.originalList.filter(photo =>
			new RegExp(searchTerm, 'gi').test(photo.title));
	}

	search(searchTerm) {
		this.http.get(this.url)
		.toPromise()
		.then(data => {
			this.list = data.json().photos.photo.filter(photo =>
				new RegExp(searchTerm, 'gi').test(photo.title))
		});
	}

	onSelectString(item) {
		this.selectedString = item;
	}

	onSelectStatic(item) {
		this.selectedStatic = item;
	}

	onSelectAsync(item) {
		this.selectedAsync = item;
	}
}

