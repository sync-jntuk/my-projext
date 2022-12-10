import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend/backend.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(private bk: BackendService) { }

	ngOnInit(): void {
	}

	registerUser(data: any) {
		console.log(data)
		// validate here

		this.bk.insertDate('/register', data).subscribe(result => {
			console.log(result)
		})

	}

}
