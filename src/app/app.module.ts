import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CardComponent } from './components/card/card.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardComponent,
    PostComponent,
    CommentComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [
    UserService,
    UserDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
