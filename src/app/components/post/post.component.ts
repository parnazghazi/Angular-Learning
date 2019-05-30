import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 isLoading = false;
  posts: Post[];
  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  getPosts() {
    this.isLoading = true;
    setTimeout(() => {
      this.route.data.subscribe(data => {
        this.isLoading = false;
        this.posts = data['user'];
      });
    }, 3000);
  }
}
