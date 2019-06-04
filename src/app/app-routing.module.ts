import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

const routes: Routes = [
  {path: 'users/:id', component: UserPostsComponent, resolve: {posts: UserDetailResolver} },
  {path: 'users', component: UsersComponent},
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
