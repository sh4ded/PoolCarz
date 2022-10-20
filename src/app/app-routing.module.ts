import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'book-ride', component: BookRideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
