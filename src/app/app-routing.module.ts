import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserComponent },
  { path: "signup", component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
