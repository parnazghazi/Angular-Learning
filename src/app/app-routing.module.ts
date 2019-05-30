import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users/:id', component: UsersComponent, resolve: UserDetailResolver},
  {path: 'users', component: UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
