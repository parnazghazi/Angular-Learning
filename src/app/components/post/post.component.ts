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
  posts: Post[];
  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(res => {

      this.posts = res['posts'];
      console.log(this.posts);
      
    });
  }
}
