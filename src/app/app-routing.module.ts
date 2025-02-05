import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RfFormsComponent } from './components/rf-forms/rf-forms.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: RfFormsComponent },
  { path: 'register', component: RfFormsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
