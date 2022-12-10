import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend/backend.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private bk: BackendService, private router: Router) { }

	ngOnInit(): void {
	}

	async getUser(userData: Object) {
		this.bk.fetchData('/login', userData).subscribe(data => {
			localStorage.setItem('name', data.name)
			localStorage.setItem('roll', data.roll)
			localStorage.setItem('loggedIn', 'true')
			this.router.navigateByUrl('/home')
		})
	}

}
