import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[];
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUserPosts();
  }
  getUserPosts() {
    this.route.data.subscribe(data => {
      this.posts = data.posts;
      console.log(this.posts);
    });
  }
}
