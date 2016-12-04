import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ResourceService {

	constructor(private http: Http) {
	}

	public getResource(url: string) {
		return this.http.get(url).subscribe(data => console.log(data));
	}

}