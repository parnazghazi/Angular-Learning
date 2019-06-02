import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: 'users/:id', component: PostComponent, resolve: {posts: UserDetailResolver} },
  {path: 'users', component: UsersComponent},
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
