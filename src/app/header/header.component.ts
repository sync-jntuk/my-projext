import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend/backend.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	userName: string = ''

	constructor(private bk: BackendService, private router: Router) { }

	ngOnInit(): void {

		// localStorage.setItem('name', 'Sandeep')
		// localStorage.setItem('loggedIn', 'true')
		// localStorage.setItem('roll', '19021A0517')

		if (!localStorage.getItem('loggedIn')) {
			this.goToLogin()
		}
		this.userName = localStorage.getItem('name') || ""
	}

	doSomething() {
		this.bk.fetchData('/', {}).subscribe(dt => {
			console.log(dt)
		})
	}

	goToHome() {}
	goToRegister() {}
	goToLogin() {
		this.router.navigateByUrl('/login')
	}

	goToUpdate() {}
	logout() {
		localStorage.clear()
		this.goToLogin()
	}

}
