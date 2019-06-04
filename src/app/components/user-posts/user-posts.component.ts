import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/_models/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

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
  deleteSelectedPost(postId){
    const postIndex = this.posts.findIndex(i => i.id === postId);
    this.posts.splice(postIndex, 1);
  }
}
