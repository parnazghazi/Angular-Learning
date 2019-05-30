import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';
import { CardComponent } from './components/card/card.component';
import { PostComponent } from './components/post/post.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    UserDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
