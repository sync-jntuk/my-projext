import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortalsComponent } from './portals/portals.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: '', redirectTo: "/home", pathMatch: "full" },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'navigation', component: PortalsComponent },
	{ path: 'departments', component: DepartmentsComponent },
	{ path: 'certificates', component: CertificatesComponent },
	{ path: 'services', component: PortalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
