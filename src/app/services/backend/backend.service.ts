import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class BackendService {

	_baseURL: string = 'http://localhost:3000'
	constructor(private httpClient: HttpClient) { }

	fetchData(url: string, params: any): Observable<any> {
		return this.httpClient.get(this._baseURL + url, { params });
	}

	insertDate(url: string, data: any): Observable<any> {
		const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') }
		return this.httpClient.post<any>(this._baseURL + url, data, config)
	}

}
